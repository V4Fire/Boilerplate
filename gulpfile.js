'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

module.exports = function initGulp(gulp = require('gulp')) {
	require('@v4fire/client/gulpfile')(gulp);
	globalThis.callGulp(module);
};

module.exports();
