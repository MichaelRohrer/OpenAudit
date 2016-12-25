'use strict';

/**
 * @ngdoc function
 * @name app.route:manageroomsRoute
 * @description
 * # manageroomsRoute
 * Route of the app
 */

angular.module('managerooms')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('managerooms', {
				url:'/managerooms',
				templateUrl: 'app/modules/managerooms/managerooms.html',
				controller: 'ManageroomsCtrl',
				controllerAs: 'vm',
				authenticate: true
			});


	}]);
