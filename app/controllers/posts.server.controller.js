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