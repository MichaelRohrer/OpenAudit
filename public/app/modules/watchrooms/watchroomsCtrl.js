(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:watchroomsCtrl
	 * @description
	 * # watchroomsCtrl
	 * Controller of the app
	 */

	angular
		.module('watchrooms')
		.controller('WatchroomsCtrl', Watchrooms);

	Watchrooms.$inject = ['$http'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Watchrooms($http) {
		/*jshint validthis: true */
		var vm = this;

		vm.nbRooms = 0;


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
		
		vm.join = function() {
			
		};

		vm.follow = function () {

		};
	}

})();
