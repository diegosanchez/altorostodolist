'use strict';

(function() {
	// Todos Controller Spec
	describe('Todos Controller Tests', function() {
		// Initialize global variables
		var TodosController,
			scope,
			$httpBackend,
			$stateParams,
			$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Todos controller.
			TodosController = $controller('TodosController', {
				$scope: scope
			});
		}));

		it('should find todos created', inject(function(Todos) {
			var todo = new Todos({ title: 'this is the todo title'});
			var todos = [todo];

			$httpBackend.expectGET('todos').respond(todos);                                                                                                       

			scope.find();

			$httpBackend.flush();

      		expect(scope.todos).toEqualData(todos);
		}));

		it('should create a new todo', inject(function(Todos) {
		  var attributes = { title: 'todo title'};				
	      var todoSample = new Todos( attributes );

	      // Fixture mock form input values
	      scope.title = attributes.title;

	      $httpBackend.expectPOST('todos', todoSample).respond(todoSample);

	      // Run controller functionality
	      scope.create();
	      $httpBackend.flush();

	      expect(scope.title).toEqual('');

	      expect($location.path()).toContain('todos');
		}));

		it('should mark a todo as done', inject(function(Todos) {
          $httpBackend.expectPUT('todos/0', {status:'done'}).respond();
          scope.markDone(0);
          $httpBackend.flush();
		}));
	});
}());
