(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:passivepollTest
	 * @description
	 * # passivepollTest
	 * Test of the app
	 */

	describe('passivepoll test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('openaudit');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('PassivepollCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
