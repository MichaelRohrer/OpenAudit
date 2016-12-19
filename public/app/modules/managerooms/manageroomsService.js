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

		Managerooms.$inject = ['$http', '$rootScope', '$state'];

		function Managerooms ($http, $rootScope, $state) {

			var services = {
				init: init,
				create: createRoom,
				close: closeRoom,
				delete: deleteRoom
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

			function createRoom(vm){
				$http({
					method : "POST",
					url : "/rooms",
					headers: {
						'Content-Type': 'application/json',
						'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
					},
					data: {
						name: vm.name,
						owner: $rootScope.username
					}
				}).then(function () {
					$state.transitionTo('adminpoll', {room: vm.name});
				});
			}
			
			function closeRoom(index, vm){
				$http({
					method : "PUT",
					url : "/rooms" + "/" + vm.rooms[index].name,
					headers: {
						'Content-Type': 'application/json',
						'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
					},
					data: {
						status: 1
					}
				}).then(function () {
					console.log("Status updated!");
				});
			}
			
			function deleteRoom(index, vm) {
				$http({
					method : "DELETE",
					url : "/rooms" + "/" + vm.rooms[index].name,
					headers: {
						'Content-Type': 'application/json',
						'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
					}
				}).then(function () {
					console.log("Room deleted!");
				});
			}
		}
})();
