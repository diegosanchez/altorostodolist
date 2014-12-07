'use strict';

//Setting up route
angular.module('posts').config(['$stateProvider',
	function($stateProvider) {
		// Posts state routing
		$stateProvider.
		state('listPosts', {
			url: '/posts',
			templateUrl: 'modules/posts/views/list-posts.client.view.html'
		}).
		state('createPost', {
			url: '/posts/create',
			templateUrl: 'modules/posts/views/create-post.client.view.html'
		});
	}
]);