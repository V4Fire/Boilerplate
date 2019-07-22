/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import API, { provider } from 'models/api';
import * as _ from 'models/api/skills/meta';

export {
	_ as types
};

@provider('api')
export default class Skills extends API {
	/** @override */
	baseURL: string = '/users/skills';
}
