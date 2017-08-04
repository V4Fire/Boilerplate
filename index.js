'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

const {env} = process;
env.NODE_ENV = env.NODE_ENV || 'standalone';
require('./dist/server/src/server')(env.APP_PORT).catch(stderr);
