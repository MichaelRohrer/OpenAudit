'use strict';

/**
 * @ngdoc function
 * @name app.route:passivepollRoute
 * @description
 * # passivepollRoute
 * Route of the app
 */

angular.module('passivepoll')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('passivepoll', {
				url:'/passivepoll/:room',
				templateUrl: 'app/modules/passivepoll/passivepoll.html',
				controller: 'PassivepollCtrl',
				controllerAs: 'vm',
				authenticate: true
			});


	}]);
