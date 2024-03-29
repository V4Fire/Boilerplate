/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import type { StaticRoutes } from 'core/router';

export default <StaticRoutes>{
	index: {
		path: '/',
		component: 'p-index',
		load: () => import('pages/p-index')
	},

	some: {
		path: '/some',
		component: 'p-some',
		load: () => import('pages/p-some')
	}
};
