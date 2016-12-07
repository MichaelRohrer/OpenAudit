(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:activepollService
	 * @description
	 * # activepollService
	 * Service of the app
	 */

  	angular
		.module('activepoll')
		.factory('ActivepollService', Activepoll);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Activepoll.$inject = ['$http'];

		function Activepoll ($http) {

		}

})();
