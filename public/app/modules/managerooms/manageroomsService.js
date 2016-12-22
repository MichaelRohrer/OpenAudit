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

		Managerooms.$inject = ['$http', '$rootScope', '$state', 'socketio'];

		function Managerooms ($http, $rootScope, $state, socketio) {

			var services = {
				init: init,
				create: createRoom,
				close: closeRoom,
				delete: deleteRoom
			};

			return services;


			function init() {

				var data = {};
				data.owner = $rootScope.username;
				socketio.emit('msg_get_room_from_owner', data, null);

				/*$http({
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
				});*/
			}

			function createRoom(vm){


				var data = {};
				data.name = vm.name;
				data.owner = $rootScope.username;

				socketio.emit('msg_create_room', data, null);
				$state.transitionTo('adminpoll', {room: vm.name});

				/*$http({
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
				});*/
			}
			
			function closeRoom(index, vm){

				var data = {};
				data.status = 1;
				data.room = vm.rooms[index].name;
				data.owner = $rootScope.username;

				socketio.emit('msg_close_room', data, null);

				/*$http({
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
				});*/
			}
			
			function deleteRoom(index, vm) {

				var data = {};
				data.room = vm.rooms[index].name;
				data.owner = $rootScope.username;

				console.log(data.room + " from " + data.owner);

				socketio.emit('msg_delete_room', data, null);

				/*$http({
					method : "DELETE",
					url : "/rooms" + "/" + vm.rooms[index].name,
					headers: {
						'Content-Type': 'application/json',
						'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
					}
				}).then(function () {
					console.log("Room deleted!");
				});*/
			}
		}
})();
