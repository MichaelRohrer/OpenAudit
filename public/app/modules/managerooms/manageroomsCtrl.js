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

		vm.state = $state;
		vm.http = $http;
		vm.scope = $scope;

		vm.createRoom = function(){

			console.log($scope.name);
			console.log($rootScope.username);

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
					$rootScope.room = $scope.name;
					$state.go('adminpoll', {}, {reload: true});
				});
		};
	}

})();

/*return $http.post("/stats", { owner: $scope.owner, repo: $scope.repo })
 .then(function () {
 console.log("Statistics sent!");
 });*/
