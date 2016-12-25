(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:registerCtrl
	 * @description
	 * # registerCtrl
	 * Controller of the app
	 */

	angular
		.module('register')
		.controller('RegisterCtrl', Register);

	Register.$inject = ['RegisterService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Register(RegisterService) {
		/*jshint validthis: true */
		var vm = this;
		vm.submit = RegisterService.register;
	}
})();
