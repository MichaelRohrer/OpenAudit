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

			function register(vm) {

				if(vm.password == '' || vm.password1 == '' || vm.username == ''){
					vm.success = false;
					vm.msg = " - All fields must bee fulfilled!";
				}
				else{
					if(vm.password === vm.password1){
						$http({
							method : "POST",
							url : "/register",
							headers: {'Content-Type': 'application/json'},
							data: {
								username: vm.username,
								password: vm.password
							}
						}).then(function (response) {
							if(response.status == 201){
								vm.success = true;
								vm.msg = " - The user has been created!";
								$state.transitionTo('login');
							}
						}, function (err) {
							vm.success = false;
							vm.msg = " - The user already exists!";
						});
					}
					else{
						vm.success = false;
						vm.msg = " - The two passwords should be the same!";
					}
				}
			}
		}
})();
