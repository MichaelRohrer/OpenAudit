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

	Managerooms.$inject = ['$state', '$rootScope', 'ManageroomsService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Managerooms($state, $rootScope, ManageroomsService) {

		var vm = this;

		vm.showme = false;

		$rootScope.username = 'mike';
		vm.username = $rootScope.username;

		ManageroomsService.init(vm);

		vm.close = ManageroomsService.close;
		vm.create = ManageroomsService.create;
		vm.delete = ManageroomsService.delete;

		vm.open = function (index) {
			$state.transitionTo('adminpoll', {room: vm.rooms[index].name});
		};

	}
})();
