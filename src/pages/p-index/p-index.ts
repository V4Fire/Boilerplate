/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import 'models/api/user';
import { Data } from 'models/api/user/interface';

import iDynamicPage, { component, field, TitleValue, RequestParams } from 'super/i-dynamic-page/i-dynamic-page';
export * from 'super/i-dynamic-page/i-dynamic-page';

@component()
export default class pIndex extends iDynamicPage {
	/** @override */
	readonly DB!: Data;

	/** @override */
	readonly pageTitleProp: TitleValue = 'Index page';

	/** @override */
	readonly dataProvider: string = 'api.User';

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
		'show',
		['wait', 'canRequestData']
	]))

	protected readonly requestParams!: RequestParams;

	/**
	 * Returns true if the component can load remote data
	 */
	async canRequestData(): Promise<boolean> {
		await this.async.sleep(3..seconds());
		return true;
	};
}
