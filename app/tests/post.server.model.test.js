'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Post = mongoose.model('Post');

/**
 * Globals
 */
var post;

/**
 * Unit tests
 */
describe('Post Model Unit Tests:', function() {
	beforeEach(function(done) {
		// For future usages
		done();
	});

	describe('Method Save', function() {
		it('should not saved because there are missing fields', function(done) {
			post = new Post();
			return post.save(function(err) {
				should.exist(err);
				done();
			});
		});
		it('should be saved because all parameters were supplied', function(done) {
			post = new Post({
				title: 'This is the title',
				body: 'This is the body'
			});
			return post.save(function(err) {
				console.log(err);
				should.not.exist(err);
				post.should.have.properties( { status: 'none'});
				done();
			});
		});
	});

	afterEach(function(done) { 
		Post.remove().exec();
		done();
	});
});