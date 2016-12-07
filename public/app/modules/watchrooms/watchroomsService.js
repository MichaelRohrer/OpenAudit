(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:watchroomsService
	 * @description
	 * # watchroomsService
	 * Service of the app
	 */

  	angular
		.module('watchrooms')
		.factory('WatchroomsService', Watchrooms);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Watchrooms.$inject = ['$http'];

		function Watchrooms ($http) {

		}

})();
