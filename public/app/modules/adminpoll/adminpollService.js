(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:adminpollService
	 * @description
	 * # adminpollService
	 * Service of the app
	 */

  	angular
		.module('adminpoll')
		.factory('AdminpollService', Adminpoll);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Adminpoll.$inject = ['$rootScope', '$stateParams', 'socketio'];

		function Adminpoll ($rootScope, $stateParams, socketio) {

			var services = {
				init: init,
				submit: submit
			};

			return services;

			function init() {
				var data = {};
				data.room = $stateParams.room;
				data.owner = $rootScope.username;
				socketio.emit('msg_get_questions', data, null);
			}

			function submit(formData, vm) {
				var results = [];
				var possibilities = [];
				for(var i = 0; i < formData.dynamicFields.length; ++i){
					results.push(10);
					possibilities.push(formData.dynamicFields[i].val);
				}

				var data = {};
				data.room = $stateParams.room;
				data.question = formData.question;
				data.possibilities = possibilities;
				data.answers = results;

				vm.showme = false;
				socketio.emit('msg_add_question', data, null);
			}
		}

})();
