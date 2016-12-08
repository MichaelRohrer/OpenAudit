(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:registerService
	 * @description
	 * # registerService
	 * Service of the app
	 */

  	angular
		.module('register')
		.factory('RegisterService', Register);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Register.$inject = ['$http'];

		function Register ($http) {

		}

})();
