'use strict';

angular.module('posts').controller('PostsController', ['$scope', '$stateParams', '$location', 'Posts', 
	function($scope, $stateParams, $location, Posts) {
		$scope.create = function() {
			var post = new Posts({
				title: this.title,
				body: this.body
			});

			post.$save(function(response) {
				$location.path('posts');

				$scope.title = '';
				$scope.body = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.posts = Posts.query();
		};

		$scope.markDone = function(id) {
			var post = new Posts({
				status: 'done'
			});

			post.$update( {postId: id}, function(response) {
				$location.path('posts');

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

		};


	}
]);