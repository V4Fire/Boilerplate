/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import 'models/api/user';
import { User } from 'models/api/user/meta';

import iDynamicPage, { component, field, TitleValue, RequestParams } from 'super/i-dynamic-page/i-dynamic-page';
export * from 'super/i-dynamic-page/i-dynamic-page';

@component()
export default class pIndex<D extends User = User> extends iDynamicPage<D> {
	/** @override */
	readonly pageTitleProp: TitleValue = 'Index page';

	/** @override */
	readonly dataProvider: string = 'API.User';

	/**
	 * User name
	 */
	@field()
	name: string = 'Bill';

	/**
	 * Some query parameter
	 */
	@field()
	show: boolean = true;

	/** @override */
	@field((o) => o.sync.object('get', [
		['id', 'name'],
		'show'
	]))

	protected readonly requestParams!: RequestParams;
}
