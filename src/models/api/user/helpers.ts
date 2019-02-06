/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import * as _ from 'models/api/user/meta';

interface User {
	name: string;
	type: string;
	lvl?: number;
}

export function postProcessUser(user: Nullable<User>): _.User {
	return {
		lvl: 0,
		name: 'Unknown',
		type: 'Human',
		...user
	};
}
