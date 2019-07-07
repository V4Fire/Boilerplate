/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import iStaticPage, { component } from 'super/i-static-page/i-static-page';
export * from 'super/i-static-page/i-static-page';

@component({root: true})
export default class pRoot<
	P extends object = Dictionary,
	Q extends object = Dictionary,
	M extends object = Dictionary,
	D extends object = Dictionary
> extends iStaticPage<P, Q, M, D> {}
