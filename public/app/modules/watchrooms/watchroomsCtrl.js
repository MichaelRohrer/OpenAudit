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

	Watchrooms.$inject = ['$scope', '$rootScope', 'WatchroomsService', '$state', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Watchrooms($scope, $rootScope, WatchroomsService, $state, socketio) {
		/*jshint validthis: true */
		var vm = this;

		if(!$rootScope.isLogged){
			$state.transitionTo('login');
		}

		if($rootScope.currentRoom != null){
			var data = {};
			data.room = $rootScope.currentRoom;
			socketio.emit('msg_leave_room', data);
		}

		vm.nbRooms = 0;
		vm.service = WatchroomsService;

		vm.service.init();

		socketio.on('msg_get_rooms', function (data) {
			vm.rooms = data;
		});

		socketio.on('msg_update_rooms', function () {
			vm.service.init();
		});

		socketio.on('msg_leave_room', function () {
			console.log("Room: " + $rootScope.currentRoom + " left.");
			data.room = $rootScope.currentRoom;
		});

		vm.join = function(index) {

			var data = {};
			data.room = vm.rooms[index].name;

			socketio.emit('msg_join_room', data);
			$state.transitionTo('activepoll', {room: vm.rooms[index].name});
		};

		vm.follow = function (index) {

			var data = {};
			data.room = vm.rooms[index].name;

			socketio.emit('msg_join_room', data);
			$state.transitionTo('passivepoll', {room: vm.rooms[index].name});
		};
	}
})();
