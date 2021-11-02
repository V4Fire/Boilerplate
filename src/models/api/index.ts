/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import Provider, { provider } from 'core/data';

export * from 'core/data';

@provider
export default class API extends Provider {
	static override request: typeof Provider.request = Provider.request({
		api: {namespace: 'api'},
		cacheStrategy: 'forever',
		responseType: 'json'
	});
}
