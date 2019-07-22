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
			Name: {{ db.api.User.name }}<br>
			Type: {{ db.api.User.type }}<br>
			LVL: {{ db.api.User.lvl }}<br>
			Skills: {{ db.api.Skills }}<br>
			Inventory: {{ db.api.Inventory }}

		< a href = \/some
			Go to another page
