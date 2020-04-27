/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import 'models/api/skills';
import 'models/api/inventory';

import API, { provider, DecodersMap, FunctionalExtraProviders, ExtraProviderParams } from 'models/api';
import { postProcessUser } from 'models/api/user/helpers';

export * from 'models/api';

@provider('api')
export default class User extends API {
	/** @override */
	baseURL: string = '/users/:id';

	/** @override */
	extraProviders: FunctionalExtraProviders = ({opts}: ExtraProviderParams) => ({
		'api.Skills': null,
		'api.Inventory': {
			query: {
				id: (<CanUndef<Dictionary>>opts?.query)?.name
			}
		}
	})

	/** @override */
	static request: typeof API.request = API.request({
		cacheTTL: (2).seconds()
	});

	/** @override */
	static readonly decoders: DecodersMap = {
		get: [postProcessUser]
	};
}
