(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:activepollTest
	 * @description
	 * # activepollTest
	 * Test of the app
	 */

	describe('activepoll test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('openaudit');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ActivepollCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
