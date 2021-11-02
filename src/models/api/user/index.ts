/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import 'models/api/skills';
import 'models/api/inventory';

import { wait } from 'core/data/middlewares';
import API, { provider, EncodersMap, DecodersMap, FunctionalExtraProviders, ExtraProviderParams } from 'models/api';
import { postProcessUser } from 'models/api/user/helpers';

export * from 'models/api';
export * from 'models/api/user/interface';

@provider('api')
export default class User extends API {
	override baseURL: string = '/users/:id';

	override extraProviders: FunctionalExtraProviders = ({opts}: ExtraProviderParams) => ({
		'api.Skills': {query: {}},
		'api.Inventory': {
			query: {
				id: (<CanUndef<Dictionary>>opts?.query)?.id
			}
		}
	})

	static override request: typeof API.request = API.request({
		cacheTTL: (2).seconds()
	});

	static override readonly encoders: EncodersMap = {
		get: [wait]
	};

	static override readonly decoders: DecodersMap = {
		get: [postProcessUser]
	};
}
