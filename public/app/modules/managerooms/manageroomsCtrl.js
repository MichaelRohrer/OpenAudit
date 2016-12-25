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

		$rootScope.username = 'mike';
		vm.username = $rootScope.username;

		ManageroomsService.init();

		vm.close = ManageroomsService.close;
		vm.create = ManageroomsService.create;
		vm.delete = ManageroomsService.delete;


		vm.open = function (index) {

			var data = {};
			data.room = vm.rooms[index].name;

			socketio.emit('msg_join_room', data);
			$state.transitionTo('adminpoll', {room: vm.rooms[index].name});
		};

		socketio.on('msg_update_managed_rooms', function (data) {
			console.log("MSG ROOM received!");
			console.log(data);
			vm.rooms = data;
		});

		socketio.on('msg_leave_room', function () {
			console.log("Room: " + $rootScope.currentRoom + " left.");
		})
	}
})();
