'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

module.exports = function (gulp = require('gulp')) {
	require('@v4fire/client/gulpfile')(gulp);
	require('@v4fire/server/gulpfile')(gulp);
};

module.exports();
