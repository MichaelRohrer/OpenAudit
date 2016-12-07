(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:activepollCtrl
	* @description
	* # activepollCtrl
	* Controller of the app
	*/

  	angular
		.module('activepoll')
		.controller('ActivepollCtrl', Activepoll);

		Activepoll.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Activepoll() {
			/*jshint validthis: true */
			var vm = this;

			vm.labels = ["Yes", "No", "Maybe"];
			vm.data = [70, 20, 10];
		}

})();
