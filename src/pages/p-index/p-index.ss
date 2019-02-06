/*!
 * V4Fire Boilerplate
 * https://github.com/V4Fire/Boilerplate
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Boilerplate/blob/master/LICENSE
 */

- namespace [%fileName%]

- include 'super/i-dynamic-page'|b as placeholder

- template index() extends ['i-dynamic-page'].index
	- block body
		< p
			Index page

		< p.&__data v-if = isReady
			Name: {{ db.name }}<br>
			Type: {{ db.type }}<br>
			LVL: {{ db.lvl }}

		< a href = \/some
			Go to another page
