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
	app = express();

module.exports = app;

app.use('/dist/client', express.static(src.clientOutput()));
app.use('/assets', express.static(src.assets()));

app.get('/api/users', (req, res) => res.send([
	{
		name: 'Bill',
		type: 'Dwarf',
		lvl: 80
	}
]));

app.get('/api/users/skills', (req, res) => res.send([
	'fight',
	'magic'
]));

app.get('/api/users/inventory', (req, res) => res.send(
	['sword+1']
));

app.get('/api/users/:id', (req, res) => res.send({
	name: 'Bill',
	type: 'Dwarf',
	lvl: 80
}));

[['/**', 'p-root']].forEach(([route, file]) => {
	file += '.html';
	app.get(route, (req, res) => res.sendFile(path.join(src.clientOutput(), file)));
});

app.listen(api.port);
console.log('App launched');
console.log(`http://localhost:${api.port}`);
