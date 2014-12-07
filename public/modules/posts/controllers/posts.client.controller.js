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

		$scope.updatePost = function (post) {
			var posts = $scope.posts;
			for( var p in posts) {
				if ( posts[p]._id === post._id) {
					posts[p] = post;
					break;
				}
			}
		};

		$scope.markDone = function(id) {
			var post = new Posts({
				status: 'done'
			});

			post.$update( {postId: id}, function(response) {
				$location.path('posts');
				$scope.updatePost(response);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.done = function  () {
			var postDone = $scope.posts.filter( function (e) {
				return e.status === 'done';
			});
			return postDone.length;
		};

	}
]);