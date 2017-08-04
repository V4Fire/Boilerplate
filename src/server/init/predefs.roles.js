'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import factory from '@v4fire/server/src/init/predefs.roles';

const
	{ObjectId} = require('mongoose').Types;

/**
 * Initializes default roles
 */
module.exports = async function () {
	const
		h = await factory();

	if (!h) {
		return;
	}

	const
		p = h.p;

	h.roles.admin = {
		_id: new ObjectId(),
		name: 'admin',
		permissions: [p.AdminAccess]
	};

	await h.create();
};
