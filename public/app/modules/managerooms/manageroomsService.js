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
				open: openRoom,
				create: createRoom,
				close: closeRoom,
				delete: deleteRoom
			};

			return services;


			function init() {

				var data = {};
				data.owner = $rootScope.username;
				socketio.emit('msg_get_room_from_owner', data, null);
			}

			function openRoom(index, vm) {
				var data = {};
				data.room = vm.rooms[index].name;

				socketio.emit('msg_join_room', data);

				if(vm.rooms[index].closed){

					var data1 = {};
					data1.status = 0;
					data1.room = vm.rooms[index].name;
					data1.owner = $rootScope.username;

					socketio.emit('msg_open_room', data1);
				}

				console.log("Room: " + data.room + " joined");
				$state.transitionTo('adminpoll', {room: vm.rooms[index].name});
			}

			function createRoom(vm){

				if(vm.name.length <= 18){
					var data = {};
					data.name = vm.name;
					data.owner = $rootScope.username;

					socketio.emit('msg_create_room', data, null);
				}
				else {
					vm.success = false;
					vm.msg = " - The name of the room is limited to 18 characters";
				}
			}
			
			function closeRoom(index, vm){

				var data = {};
				data.status = 1;
				data.room = vm.rooms[index].name;
				data.owner = $rootScope.username;

				socketio.emit('msg_close_room', data, null);
			}
			
			function deleteRoom(index, vm) {

				var data = {};
				data.room = vm.rooms[index].name;
				data.owner = $rootScope.username;

				socketio.emit('msg_delete_room', data, null);
			}
		}
})();
