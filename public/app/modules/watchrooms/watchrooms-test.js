(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:watchroomsTest
	 * @description
	 * # watchroomsTest
	 * Test of the app
	 */

	describe('watchrooms test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('openaudit');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('WatchroomsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
