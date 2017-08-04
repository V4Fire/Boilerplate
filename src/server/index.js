'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

const {env} = process;
global.isProd = env.NODE_ENV === 'production';

const
	$C = require('collection.js'),
	config = require('config'),
	path = require('path'),
	path2rgxp = require('path-to-regexp');

const
	Koa = require('koa'),
	Raven = require('raven'),
	Router = require('koa-router'),
	send = require('koa-send');

const
	{src} = config;

module.exports = async (port) => {
	const
		app = new Koa(),
		router = new Router();

	if (isProd) {
		Raven
			.config(config.sentry.url)
			.install();
	}

	app.on('error', (err) => {
		console.error(err);
		isProd && Raven.captureException(err, (err, eventId) => console.log(`Reported error ${eventId}`));
	});

	require('./core');
	await require('./models')();
	await require('./init')();

	if (Number(env.WORKER_MODE)) {
		await require('./workers')();
	}

	await require('./controllers')(router);

	if (isProd) {
		app.use(require('koa-logger')());
	}

	app
		.use(require('koa-bodyparser')())
		.use(require('kcors')({
			credentials: true,
			allowHeaders: ['X-XSRF-TOKEN', 'Authorization', 'Content-Type'],
			exposeHeaders: ['X-XSRF-TOKEN', 'X-JWT-TOKEN']
		}));

	$C(['@query', '@boom', '@assets', '@manifest', '@config']).forEach((el) => {
		if (el[0] === '@') {
			app.use(require(`@v4fire/server/src/middlewares/${el.slice(1)}`));

		} else {
			app.use(require(`./middlewares/${el}`));
		}
	});

	app
		.use(router.routes())
		.use(router.allowedMethods());

	// Self static serving
	if (!isProd) {
		app
			.use(serve(path.join(src.clientOutput(), '/**')))
			.use(serve(path.join(src.assets(), '/**')));
	}

	function d(file) {
		return path.join(src.clientOutput(), file);
	}

	app
		.use(serve(isProd ? '/index' : '/**', d('p-index.html')));

	await require('./sockets')(app.listen(port));
	console.log(`Server started at localhost:${port}`);
};

const
	acceptedRequests = new Set(['HEAD', 'GET', 'POST']),
	fixPath = /^\/[a-zA-Z]+\/?/,
	isHTML = /\.html$/;

function serve(root, to) {
	if (to) {
		to = r(to);

	} else {
		root = r(root);
	}

	function r(file) {
		return `/${path.relative(src.cwd, file).replace(/\\/g, '/')}`;
	}

	return async (ctx, next) => {
		const
			path = !to && isProd ? ctx.path.replace(fixPath, '/') : ctx.path;

		if (acceptedRequests.has(ctx.method) && path2rgxp(root).test(path)) {
			if (isHTML.test(to)) {
				ctx.set('Cache-Control', `no-store, no-cache, must-revalidate`);
				ctx.set('Pragma', `no-cache`);
			}

			if (await send(ctx, to || path, {gzip: isProd})) {
				return;
			}
		}

		return next();
	};
}
