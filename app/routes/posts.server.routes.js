'use strict';

var posts = require('../../app/controllers/posts.server.controller');

module.exports = function(app) {
	// Post routes
	app.route('/posts')
		.get(posts.list)
		.post(posts.create);
};