'use strict';

/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import Base from '@v4fire/server/src/models/permission.enum';
import { model } from 'models/core/model';

@model(module)
export default class PermissionEnum extends Base {}
