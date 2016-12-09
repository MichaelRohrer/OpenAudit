(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:passivepollCtrl
	 * @description
	 * # passivepollCtrl
	 * Controller of the app
	 */

	angular
		.module('passivepoll')
		.controller('PassivepollCtrl', Passivepoll);

	Passivepoll.$inject = [];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Passivepoll() {
		/*jshint validthis: true */
		var vm = this;

		vm.showme = false;
		vm.data = [70, 20, 10];
		vm.labels = ["Yes", "No", "Maybe"];
	}

})();
