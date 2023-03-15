/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import iDynamicPage, { component, TitleValue } from 'components/super/i-dynamic-page/i-dynamic-page';

export * from 'components/super/i-dynamic-page/i-dynamic-page';

@component()
export default class pSome extends iDynamicPage {
	override readonly pageTitleProp: TitleValue = 'Another page';
}
