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

		Login.$inject = ['$http', '$rootScope'];

		function Login ($http, $rootScope) {

			var services = {
				login: login
			};

			return services;

			function login(username, password) {

				$http({
				 method : "POST",
				 url : "/auth",
				 headers: {'Content-Type': 'application/json'},
				 data: {
				 	 username: username,
					 password: password
				 }
				 }).then(function (response) {
				 	console.log(response);
				 	$rootScope.isLogged = true;
					$rootScope.username = username;
				 });
			}
		}
})();
