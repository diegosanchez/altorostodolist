(function () {
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Todo = mongoose.model('Todo'),
    _ = require('lodash');

/**
 * Create a Todo
 */
exports.create = function(req, res) {
	var todo = new Todo( req.body );

	todo.save( function (err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(todo);
		}
	});

};

/**
 * List of Todos
 */
exports.list = function(req, res) {
	Todo.find( function (err, todo) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(todo);
		}
	});
};

exports.update = function  (req, res) {
	Todo.findById(req.params.postId, function (err, todo) {

		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}

		todo.status = req.body.status;

		todo.save( function (err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.json(todo);
			}
		});
	});
};
}());
