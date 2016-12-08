(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:registerTest
	 * @description
	 * # registerTest
	 * Test of the app
	 */

	describe('register test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('openaudit');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RegisterCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
