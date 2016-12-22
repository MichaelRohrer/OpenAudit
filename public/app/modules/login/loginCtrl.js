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

	Login.$inject = ['socketio', '$rootScope'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Login(socketio, $rootScope) {
		/*jshint validthis: true */
		var vm = this;

		vm.init = function setupSocketIO(socketio, $rootScope) {
			console.log("setup socket io factory");
			console.log(socketio);
			socketio.init();

			socketio.on('msg_update_room', function (msg) {
				console.log("welcome message received via socket.io received in pages.module.js");
				console.log(msg);
				console.log("broadcasting socket.io message via AngularJS event system");
				$rootScope.$broadcast('msg_welcome', msg);
			});
			/*socketio.on('msg_observation', function (msg) {
				console.log("observation message received via socket.io in pages.module.js");
				console.log(msg);
				console.log("broadcasting socket.io message via AngularJS event system");
				$rootScope.$broadcast('msg_observation', msg);
			});*/
		};

		vm.init(socketio, $rootScope);
	}

})();
