(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:watchroomsCtrl
	* @description
	* # watchroomsCtrl
	* Controller of the app
	*/

  	angular
		.module('watchrooms')
		.controller('WatchroomsCtrl', Watchrooms);

		Watchrooms.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Watchrooms() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
