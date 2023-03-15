/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import iStaticPage, { component } from 'components/super/i-static-page/i-static-page';

export * from 'components/super/i-static-page/i-static-page';

@component({root: true})
export default class pRoot extends iStaticPage {
	/**
	 * Название активной страницы
	 */
	override get activePage(): CanUndef<string> {
		return this.route && this.field.get<string>('route.meta.component');
	}
}
