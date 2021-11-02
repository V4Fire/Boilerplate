/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import type { RawUser, User } from 'models/api/user';

export function postProcessUser(user: Nullable<RawUser>): User {
	return {
		lvl: 0,
		name: 'Unknown',
		type: 'Human',
		...user
	};
}
