'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import factory from '@v4fire/server/src/init/predefs';
import roles from 'init/predefs.roles';
import migration from 'init/migration';

/**
 * Initializes default enums
 */
export async function main() {
	await migration();

	await factory.call(this, {
		LangEnum: [
			{name: 'ru'},
			{name: 'en'},
			{name: 'es'},
			{name: 'it'},
			{name: 'fr'},
			{name: 'de'},
			{name: 'zh'}
		],

		PermissionEnum: [
			{name: 'AdminAccess'},
		]
	});

	await roles();
}
