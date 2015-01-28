(function () {
'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Todo = mongoose.model('Todo');

/**
 * Globals
 */
var todo;

/**
 * Unit tests
 */
describe('Todo Model Unit Tests:', function() {
	beforeEach(function(done) {
		// For future usages
		done();
	});

	describe('Method Save', function() {
		it('should not saved because there are missing fields', function(done) {
			todo = new Todo();
			return todo.save(function(err) {
				should.exist(err);
				done();
			});
		});
		it('should be saved because all parameters were supplied', function(done) {
			todo = new Todo({
				title: 'This is the title'
			});
			return todo.save(function(err) {
				should.not.exist(err);
				todo.should.have.properties( { status: 'none'});
				done();
			});
		});
	});

	afterEach(function(done) { 
		Todo.remove().exec();
		done();
	});
});

}());
