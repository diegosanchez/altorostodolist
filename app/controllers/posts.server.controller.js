'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Post = mongoose.model('Post'),
    _ = require('lodash');

/**
 * Create a Post
 */
exports.create = function(req, res) {
	var post = new Post( req.body );

	post.save( function (err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(post);
		}
	});

};

/**
 * List of Posts
 */
exports.list = function(req, res) {
	Post.find( function (err, posts) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(posts);
		}
	});
};

/*
exports.mark_done = function  (req, res) {
	var id = req.body.id;
	Post.findById(id, function (err, post) {

		post.status = 'done';

		post.save( function (err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.json(post);
			}
		});
		// body...
	}
}
*/