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

		vm.showme = false;

		$rootScope.username = 'mike';
		vm.username = $rootScope.username;

		ManageroomsService.init();

		vm.close = ManageroomsService.close;
		vm.create = ManageroomsService.create;
		vm.delete = ManageroomsService.delete;

		vm.open = function (index) {
			$state.transitionTo('adminpoll', {room: vm.rooms[index].name});
		};


		socketio.on('msg_update_managed_rooms', function (data) {
			console.log("MSG ROOM received!");
			console.log(data);
			vm.rooms = data;
		});
	}
})();
