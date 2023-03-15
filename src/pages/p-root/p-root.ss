/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

- namespace [%fileName%]

- include 'components/super/i-static-page/i-static-page.component.ss'|b as placeholder

- template index() extends ['i-static-page.component'].index
	- block helpers
		< b-router v-once

	- block body
		< .&__view v-if = isReady
			< b-dynamic-page &
				ref = page |
				:page = activePage |
				:keepAlive = true
			.
