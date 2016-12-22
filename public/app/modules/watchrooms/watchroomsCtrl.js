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

	Watchrooms.$inject = ['$scope', 'WatchroomsService', '$state', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Watchrooms($scope, WatchroomsService, $state, socketio) {
		/*jshint validthis: true */
		var vm = this;

		vm.nbRooms = 0;
		vm.service = WatchroomsService;

		vm.service.init(vm);

		socketio.on('msg_update_rooms', function (data) {
			console.log("Room should be updated !");
			vm.rooms = data;
		});

		vm.join = function(index) {
			$state.transitionTo('activepoll', {room: vm.rooms[index].name});
		};

		vm.follow = function (index) {
			$state.transitionTo('passivepoll', {room: vm.rooms[index].name});
		};
	}
})();
