(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:loginCtrl
	 * @description
	 * # loginCtrl
	 * Controller of the app
	 */

	angular
		.module('login')
		.controller('LoginCtrl', Login);

	Login.$inject = ['socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Login(socketio) {
		/*jshint validthis: true */
		var vm = this;

		socketio.init();

		var hhh = {};

		hhh.a = "Hello";

		socketio.on("msg_welcome", function () {
			console.log("received welcome message via angular event system in birdsCtrl.js");
		});

		socketio.emit('test', hhh, null);
	}

})();
