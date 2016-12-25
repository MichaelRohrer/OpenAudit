(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:passivepollService
	 * @description
	 * # passivepollService
	 * Service of the app
	 */

  	angular
		.module('passivepoll')
		.factory('PassivepollService', Passivepoll);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Passivepoll.$inject = ['$rootScope','$stateParams', 'socketio'];

		function Passivepoll ($rootScope, $stateParams, socketio) {

			var services = {
				init: init
			};

			return services;

			function init() {
				var data = {};
				data.room = $stateParams.room;
				data.owner = $rootScope.username;
				socketio.emit('msg_get_questions', data, null);
			}
		}

})();
