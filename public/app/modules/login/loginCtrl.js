(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:loginCtrl
	 * @description
	 * # loginCtrl
	 * Controller of the app
	 */

	angular
		.module('login')
		.controller('LoginCtrl', Login);

	Login.$inject = ['socketio', '$rootScope', 'LoginService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Login(socketio, $rootScope, LoginService) {
		/*jshint validthis: true */
		var vm = this;
		$rootScope.isLogged = false;

		socketio.init();
		vm.submit = LoginService.login;
	}

})();
