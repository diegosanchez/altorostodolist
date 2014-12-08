'use strict';

var todos = require('../../app/controllers/todos.server.controller');

module.exports = function(app) {
	// Post routes
	app.route('/todos')
		.get(todos.list)
		.post(todos.create);

	app.route('/todos/:postId')
		.put(todos.update);
};
