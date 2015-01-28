(function () {
'use strict';

//Setting up route
angular.module('todos').config(['$stateProvider',
	function($stateProvider) {
		// Posts state routing
		$stateProvider.
		state('listTodos', {
			url: '/todos',
			templateUrl: 'modules/todos/views/list-todos.client.view.html'
		}).
		state('createTodo', {
			url: '/todos/create',
			templateUrl: 'modules/todos/views/create-todo.client.view.html'
		});
	}
]);
}());
