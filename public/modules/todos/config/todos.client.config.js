'use strict';

// Todos module config
angular.module('todos').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Todos', 'todos', 'dropdown', '/todos(/create)?');
		Menus.addSubMenuItem('topbar', 'todos', 'List Todos', 'todos');
		Menus.addSubMenuItem('topbar', 'todos', 'New todo', 'todos/create');
	}
]);
