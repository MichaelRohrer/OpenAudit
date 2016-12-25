(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:registerService
	 * @description
	 * # registerService
	 * Service of the app
	 */

  	angular
		.module('register')
		.factory('RegisterService', Register);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Register.$inject = ['$http', '$state'];

		function Register ($http, $state) {

			var services = {
				register: register
			};

			return services;

			function register(uname, pwd1, pwd2) {

				if(pwd1 === pwd2){
					$http({
						method : "POST",
						url : "/register",
						headers: {'Content-Type': 'application/json'},
						data: {
							username: uname,
							password: pwd1
						}
					}).then(function (response) {
						console.log(response);
						$state.transitionTo('login');
					});
				}
			}
		}

})();
