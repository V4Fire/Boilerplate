'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

const
	config = include('config/default');

module.exports = config.createConfig({dirs: [__dirname], mod: '@super/config/production'}, {
	__proto__: config
});
