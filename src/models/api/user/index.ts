/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import API, { provider, DecodersTable } from 'models/api';

import * as _ from 'models/api/user/meta';
import * as $ from 'models/api/user/helpers';

export {
	_ as types,
	$ as helpers
};

@provider('API')
export default class User extends API {
	/** @override */
	baseURL: string = '/users/:id';

	/** @override */
	static request: typeof API.request = API.request({
		cacheTTL: (2).seconds()
	});

	/** @override */
	static readonly decoders: DecodersTable = {
		get: [$.postProcessUser]
	};
}
