(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:adminpollService
	 * @description
	 * # adminpollService
	 * Service of the app
	 */

  	angular
		.module('adminpoll')
		.factory('AdminpollService', Adminpoll);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Adminpoll.$inject = ['$http'];

		function Adminpoll ($http) {

		}

})();
