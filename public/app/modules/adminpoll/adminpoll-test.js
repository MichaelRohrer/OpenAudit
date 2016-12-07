(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:adminpollTest
	 * @description
	 * # adminpollTest
	 * Test of the app
	 */

	describe('adminpoll test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('openaudit');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AdminpollCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
