'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var states = 'none done'.split(' ');

/**
 * Post Schema
 */
var PostSchema = new Schema({
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	body: {
		type: String,
		required: 'Body cannot be blank'
	},
	status: {
		type: String,
		default: states[0],
		enum: states
	}
});

mongoose.model('Post', PostSchema);