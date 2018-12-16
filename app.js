'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

const
	config = require('config'),
	express = require('express'),
	path = require('path');

const
	{api, src} = config,
	app = module.exports = express();

app.use('/dist/client', express.static(src.clientOutput()));
app.use('/assets', express.static(src.assets()));

[
	['/**', 'p-root']

].forEach(([route, file]) => {
	file += '.html';
	app.get(route, (req, res) => res.sendFile(path.join(src.clientOutput(), file)));
});

app.listen(api.port);
console.log('App launched');
console.log(`http://localhost:${api.port}`);
