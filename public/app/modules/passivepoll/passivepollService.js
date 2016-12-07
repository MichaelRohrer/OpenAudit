(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:passivepollService
	 * @description
	 * # passivepollService
	 * Service of the app
	 */

  	angular
		.module('passivepoll')
		.factory('PassivepollService', Passivepoll);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Passivepoll.$inject = ['$http'];

		function Passivepoll ($http) {

		}

})();
