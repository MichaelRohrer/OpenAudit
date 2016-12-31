(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:loginService
	 * @description
	 * # loginService
	 * Service of the app
	 */

  	angular
		.module('login')
		.factory('LoginService', Login);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Login.$inject = ['$http', '$rootScope', '$state'];

		function Login ($http, $rootScope, $state) {

			var services = {
				login: login
			};

			return services;

			function login(vm) {

				$http({
				 method : "POST",
				 url : "/auth",
				 headers: {'Content-Type': 'application/json'},
				 data: {
				 	 username: vm.username,
					 password: vm.password
				 }
				 }).then(function (response) {
				 	if(response.status == 200){
						vm.success = true;
						vm.msg = " - Successful login!";
						$rootScope.isLogged = true;
						$rootScope.username = vm.username;
						$state.transitionTo('managerooms');
					}
				 }, function (err) {
					vm.success = false;
					vm.msg = " - Wrong username or password!";
				});
			}
		}
})();
