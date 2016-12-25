'use strict';

/**
 * @ngdoc function
 * @name app.route:registerRoute
 * @description
 * # registerRoute
 * Route of the app
 */

angular.module('register')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('register', {
				url:'/register',
				templateUrl: 'app/modules/register/register.html',
				controller: 'RegisterCtrl',
				controllerAs: 'vm',
				authenticate: false
			});


	}]);
