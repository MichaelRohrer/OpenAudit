'use strict';

/**
 * @ngdoc function
 * @name app.route:adminpollRoute
 * @description
 * # adminpollRoute
 * Route of the app
 */

angular.module('adminpoll')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('adminpoll', {
				url:'/adminpoll',
				templateUrl: 'app/modules/adminpoll/adminpoll.html',
				controller: 'AdminpollCtrl',
				controllerAs: 'vm'
			});


	}]);
