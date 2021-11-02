'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

require('config');

module.exports = function initGulp(gulp = require('gulp')) {
	include('@super/gulpfile', __dirname)(gulp);
	globalThis.callGulp(module);
};

module.exports();
