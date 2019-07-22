/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import 'models/api/user';
import 'models/api/skills';
import 'models/api/inventory';

import { User } from 'models/api/user/meta';
import { Skills } from 'models/api/skills/meta';
import { Inventory } from 'models/api/inventory/meta';

import iDynamicPage, {

	component,
	field,

	TitleValue,
	RequestParams,
	ExtraProviders

} from 'super/i-dynamic-page/i-dynamic-page';

export * from 'super/i-dynamic-page/i-dynamic-page';

export interface Data {
	API: {
		User: User;
		Skills: Skills;
		Inventory: Inventory;
	}
}

@component()
export default class pIndex<D extends Data = Data> extends iDynamicPage<D> {
	/** @override */
	readonly pageTitleProp: TitleValue = 'Index page';

	/** @override */
	readonly dataProvider: string = 'api.User';

	/** @override */
	extraProviders(): ExtraProviders {
		return {
			'api.Skills': null,
			'api.Inventory': {
				query: {
					id: this.name
				}
			}
		};
	}

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
