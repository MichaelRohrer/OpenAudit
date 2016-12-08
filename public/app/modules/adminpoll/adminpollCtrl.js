(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:adminpollCtrl
	 * @description
	 * # adminpollCtrl
	 * Controller of the app
	 */

	angular
		.module('adminpoll')
		.controller('AdminpollCtrl', Adminpoll);

	Adminpoll.$inject = [];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Adminpoll() {
		/*jshint validthis: true */
		var vm = this;

		vm.showme = false;

		vm.list = [1, 2];
		vm.counter = 2;

		vm.submit = function () {

		};

		vm.addRow = function() {

			console.log("Add Row Pushed")

			vm.counter++;
			vm.list.push(vm.counter);
		};

		vm.removeRow = function () {

			console.log("Counter:" + vm.counter);

			if(vm.counter > 2){
				vm.counter--;
				vm.list.pop();
			}
		}
	}



})();
