(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:manageroomsService
	 * @description
	 * # manageroomsService
	 * Service of the app
	 */

  	angular
		.module('managerooms')
		.factory('ManageroomsService', Managerooms);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Managerooms.$inject = ['$http'];

		function Managerooms ($http) {

		}

})();
