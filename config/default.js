'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

const
	config = require('@v4fire/client/config/default');

module.exports = config.createConfig({dirs: [__dirname, 'client']}, {
	__proto__: config
});
