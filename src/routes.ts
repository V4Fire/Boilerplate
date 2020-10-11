/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import { StaticRoutes } from 'core/router/interface';

export default <StaticRoutes>{
	index: {
		path: '/',
		component: 'p-index',
		entryPoint: 'p-index'
	},

	some: {
		path: '/some',
		component: 'p-some',
		entryPoint: 'p-some'
	}
};
