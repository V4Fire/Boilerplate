'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import factory from '@v4fire/server/src/init/enums';
import roles from 'init/enums.roles';

/**
 * Map of available languages
 */
export let lang: ?Object;

/**
 * Map of available permissions
 */
export let permission: ?Object;

/**
 * Map of available roles
 */
export let role: ?Object;

/**
 * Initializes enums
 */
export async function main() {
	await factory.call(this, {
		LangEnum(el) {
			lang = el;
		},

		PermissionEnum(el) {
			permission = el;
		}
	});

	role = await roles();
}
