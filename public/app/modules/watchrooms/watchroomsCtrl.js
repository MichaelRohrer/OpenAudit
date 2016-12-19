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

	Watchrooms.$inject = ['$http', 'WatchroomsService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Watchrooms($http, WatchroomsService) {
		/*jshint validthis: true */
		var vm = this;

		vm.nbRooms = 0;
		vm.service = WatchroomsService;

		vm.service.init(vm);
		
		vm.join = function() {
			
		};

		vm.follow = function () {

		};
	}

})();
