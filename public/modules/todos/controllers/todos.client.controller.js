'use strict';

angular.module('todos').controller('TodosController', ['$scope', '$stateParams', '$location', 'Todos', 
	function($scope, $stateParams, $location, Todos) {
		$scope.create = function() {
			var todo = new Todos({
				title: $scope.title,
			});

			todo.$save(function(response) {
				$location.path('todos');

				$scope.title = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.todos = Todos.query() || [];
		};

		$scope.updatePost = function (todo) {
			var todos = $scope.todos;
			for( var t in todos) {
				if ( todos[t]._id === todo._id) {
					todos[t] = todo;
					break;
				}
			}
		};

		$scope.markDone = function(id) {
			var todo = new Todos({
				status: 'done'
			});

			todo.$update( {todoId: id}, function(response) {
				$location.path('todos');
				$scope.updatePost(response);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.done = function  () {
			var todoDone = $scope.todos.filter( function (e) {
				return e.status === 'done';
			});
			return todoDone.length;
		};

	}
]);
