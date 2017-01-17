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

	Login.$inject = ['$state', '$rootScope', 'LoginService', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Login($state, $rootScope, LoginService, socketio) {
		/*jshint validthis: true */
		var vm = this;
		$rootScope.isLogged = false;

		vm.username = '';
		vm.password = '';

		socketio.init();

		vm.submit = LoginService.login;

		vm.register = function () {
			$state.transitionTo('register');
		}
	}

})();
