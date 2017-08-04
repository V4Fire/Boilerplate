'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import Store from 'core/store';
import Base from '@v4fire/server/src/models/action';
import { model } from 'models/core/model';

export const
	$$ = new Store();

@model(module)
export default class Action extends Base {}
