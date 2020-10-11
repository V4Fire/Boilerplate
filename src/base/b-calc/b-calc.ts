/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

import iBlock, { component, prop } from 'super/i-block/i-block';

export * from 'super/i-block/i-block';

export type Op =
	'+' |
	'-' |
	'*' |
	'/';

@component()
export default class bCalc extends iBlock {
	/**
	 * First parameter
	 */
	@prop(Number)
	readonly p1!: number;

	/**
	 * Second parameter
	 */
	@prop(Number)
	readonly p2!: number;

	/**
	 * Operation
	 */
	@prop(String)
	readonly op: Op = '+';

	/**
	 * Calculates an expression and returns the result
	 */
	protected calc(): number {
		return Function('a', 'b', `return a ${this.op} b`)(this.p1, this.p2);
	}
}
