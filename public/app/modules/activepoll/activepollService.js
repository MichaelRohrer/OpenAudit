(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:activepollService
	 * @description
	 * # activepollService
	 * Service of the app
	 */

  	angular
		.module('activepoll')
		.factory('ActivepollService', Activepoll);

		Activepoll.$inject = ['$rootScope', '$stateParams', 'socketio'];

		function Activepoll ($rootScope, $stateParams, socketio) {

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
