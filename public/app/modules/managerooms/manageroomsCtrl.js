(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:manageroomsCtrl
	 * @description
	 * # manageroomsCtrl
	 * Controller of the app
	 */

	angular
		.module('managerooms')
		.controller('ManageroomsCtrl', Managerooms);

	Managerooms.$inject = ['$state', '$scope', '$rootScope', 'ManageroomsService', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Managerooms($state, $scope, $rootScope, ManageroomsService, socketio) {

		var vm = this;

		if(!$rootScope.isLogged){
			$state.transitionTo('login');
		}

		if($rootScope.currentRoom != null){
			var data = {};
			data.room = $rootScope.currentRoom;
			socketio.emit('msg_leave_room', data);
		}

		vm.showme = false;
		vm.username = $rootScope.username;

		ManageroomsService.init();

		vm.open = ManageroomsService.open;
		vm.close = ManageroomsService.close;
		vm.create = ManageroomsService.create;
		vm.delete = ManageroomsService.delete;

		socketio.on('msg_update_managed_rooms', function (data) {
			vm.rooms = data;
		});

		socketio.on('msg_leave_room', function () {
			if($rootScope.currentRoom != null){
				console.log("Room: " + $rootScope.currentRoom + " left");
			}
			$rootScope.currentRoom = null;
		});

		socketio.on('msg_status', function (data) {

			vm.success = data.status == 'ok';
			vm.msg = ' - ' + data.msg;

			if(data.replyTo === 'msg_create_room' && data.status === 'ok'){
				var reply = {};
				reply.room = data.room;
				socketio.emit('msg_join_room', reply);
				$state.transitionTo('adminpoll', {room: data.room});
			}
		});
	}
})();
