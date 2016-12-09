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


		vm.showme1 = false;
		vm.data = [70, 20, 10];
		vm.labels = ["Yes", "No", "Maybe"];

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
