/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import * as _ from 'models/api/user/interface';

export function postProcessUser(user: Nullable<_.RawUser>): _.User {
	return {
		lvl: 0,
		name: 'Unknown',
		type: 'Human',
		...user
	};
}
