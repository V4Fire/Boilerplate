'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

const
	$C = require('collection.js'),
	path = require('path');

const
	defServerConfig = require('@v4fire/server/config/default'),
	defClientConfig = require('@v4fire/client/config/default');

const
	config = module.exports = $C.extend(defClientConfig.extend, {}, defClientConfig, defServerConfig);

config.babel.server.resolveModuleSource.src = config.src;
config.src.server = [path.join(__dirname, '../src/server')].concat(config.src.server);
config.src.client = [path.join(__dirname, '../src/client')].concat(config.src.client);
