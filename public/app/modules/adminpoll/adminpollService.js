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
				submit: submit,
				close: close
			};

			return services;

			function init() {
				var data = {};
				data.room = $stateParams.room;
				data.owner = $rootScope.username;
				socketio.emit('msg_get_questions', data, null);
			}

			function submit(formData, vm) {
				var fulfilled = true;
				var results = [];
				var possibilities = [];
				for(var i = 0; i < formData.dynamicFields.length; ++i){
					results.push(0);

					if(formData.dynamicFields[i].val === ''){
						fulfilled = false;
						break;
					}
					else{
						possibilities.push(formData.dynamicFields[i].val);
					}
				}

				if(fulfilled && formData.question != ''){
					if(formData.correctAnswerIndex != null){
						var data = {};
						data.room = $stateParams.room;
						data.question = formData.question;
						data.possibilities = possibilities;
						data.answers = results;
						data.correctAnswerIndex = formData.correctAnswerIndex;

						vm.showme = false;
						socketio.emit('msg_add_question', data, null);
					}
					else{
						vm.success = false;
						vm.msg = " - A solution should be selected";
					}
				}
				else{
					vm.success = false;
					vm.msg = " - All fields should be fulfilled";
				}
			}

			function close(index) {
				var data = {};
				data.qId = index;
				data.roomId = $rootScope.currentRoom;

				socketio.emit('msg_close_question', data)
			}
		}

})();
