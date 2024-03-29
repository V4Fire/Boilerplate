/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import API, { provider } from 'models/api';

export * from 'models/api';
export * from 'models/api/inventory/interface';

@provider('api')
export default class Inventory extends API {
	override baseURL: string = '/users/inventory';
}
