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

	Managerooms.$inject = ['$state', '$http', '$rootScope', '$scope'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Managerooms($state, $http, $rootScope, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.showme = false;

		$rootScope.username = 'mike';

		$http({
			method : "GET",
			url : "/rooms",
			headers: {
				'Content-Type': 'application/json',
				'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
			}
		}).then(function mySucces(response) {
			vm.rooms = response.data;
		}, function myError(response) {
			console.log("A problem occurred while loading the rooms");
		});


		vm.create = function(){

			$http({
				method : "POST",
				url : "/rooms",
				headers: {
					'Content-Type': 'application/json',
					'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
				},
				data: {
					name: $scope.name,
					owner: $rootScope.username
				}
			}).then(function () {
					$state.transitionTo('adminpoll', {room: $scope.name});
				});
		};

		vm.close = function (index) {
			$http({
				method : "PUT",
				url : "/rooms" + "/" + vm.rooms[index].name,
				headers: {
					'Content-Type': 'application/json',
					'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
				},
				data: {
					status: 1
				}
			}).then(function () {
				console.log("Status updated!");
			});
		};

		vm.open = function (index) {
			$state.transitionTo('adminpoll', {room: vm.rooms[index].name});
		};

		vm.delete = function (index) {
			$http({
				method : "DELETE",
				url : "/rooms" + "/" + vm.rooms[index].name,
				headers: {
					'Content-Type': 'application/json',
					'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
				}
			}).then(function () {
				console.log("Room deleted!");
			});
		};
	}
})();
