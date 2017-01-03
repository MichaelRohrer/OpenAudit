(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('openaudit')
		.controller('HomeCtrl', Home);

	Home.$inject = ['$state', '$rootScope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home($state, $rootScope) {
		/*jshint validthis: true */
		var vm = this;

		if(!$rootScope.isLogged){
			$state.transitionTo('login');
		}

		vm.create = function () {
			$state.transitionTo('managerooms');
		};

		vm.join = function () {
			$state.transitionTo('watchrooms');
		};
	}

})();
