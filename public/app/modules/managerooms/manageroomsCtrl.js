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

		Managerooms.$inject = ['$state'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Managerooms($state) {
			/*jshint validthis: true */
			var vm = this;

			vm.showme = false;

			vm.createRoom = function($state){

				$state.go('adminpoll', {}, {reload: true});
			};

			vm.state = $state;

		}

})();
