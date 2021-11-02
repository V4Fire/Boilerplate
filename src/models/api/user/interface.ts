/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import type { Skills } from 'models/api/skills';
import type { Inventory } from 'models/api/inventory';

export interface RawUser {
	name: string;
	type: string;
	lvl?: number;
}

export interface User {
	name: string;
	type: string;
	lvl: number;
}

export interface Data {
	API: {
		User: User;
		Skills: Skills;
		Inventory: Inventory;
	}
}
