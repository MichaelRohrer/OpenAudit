'use strict';

/**
 * @ngdoc function
 * @name app.route:watchroomsRoute
 * @description
 * # watchroomsRoute
 * Route of the app
 */

angular.module('watchrooms')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('watchrooms', {
				url:'/watchrooms',
				templateUrl: 'app/modules/watchrooms/watchrooms.html',
				controller: 'WatchroomsCtrl',
				controllerAs: 'vm'
			});


	}]);
