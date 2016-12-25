'use strict';

/**
 * @ngdoc function
 * @name app.route:activepollRoute
 * @description
 * # activepollRoute
 * Route of the app
 */

angular.module('activepoll')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('activepoll', {
				url:'/activepoll/:room',
				templateUrl: 'app/modules/activepoll/activepoll.html',
				controller: 'ActivepollCtrl',
				controllerAs: 'vm',
				authenticate: true
			});


	}]);
