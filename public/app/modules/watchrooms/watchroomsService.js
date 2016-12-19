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

			var services = {
				init: init
			};

			return services;

			function init(vm) {
				$http({
					method : "GET",
					url : "/rooms",
					headers: {
						'Content-Type': 'application/json',
						'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
					}
				}).then(function mySucces(response) {
					vm.rooms = response.data;
				}, function myError(response) {
					console.log("A problem occurred while loading the rooms");
				});
			}
		}
})();
