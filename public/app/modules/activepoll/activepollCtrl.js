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

	Activepoll.$inject = ['$scope', '$rootScope', '$stateParams', '$state', 'socketio', 'ActivepollService'];


	function Activepoll($scope, $rootScope, $stateParams, $state, socketio, ActivepollService) {

		var vm = this;

		if(!$rootScope.isLogged){
			$state.transitionTo('login');
		}

		$rootScope.currentRoom = $stateParams.room;

		vm.service = ActivepollService;
		vm.service.init();

		//Question field
		var questionsData = [];
		$scope.questionsData = questionsData;

		socketio.on('msg_update_question', function (data) {
			data[0].total = 1;
			data[0].showme = true;
			data[0].answer = null;
			$scope.questionsData.push(data[0]);
		});

		socketio.on('msg_update_questions', function (data) {
			$scope.questionsData = [];
			for(var i = 0; i < data.length; i++){

				var total = 0;
				for(var j = 0; j < data[i].answers.length; j++){
					total += data[i].answers[j];
				}

				data[i].total = total >= 1 ? total : 1;
				data[i].showme = true;
				data[i].answer = null;
				$scope.questionsData.push(data[i]);
			}
		});

		socketio.on('msg_update_question_results', function (data) {

			var total = 0;
			for(var i = 0; i < data.result.answers.length; i++){
				total += data.result.answers[i];
			}

			$scope.questionsData[data.index].total = total >= 1 ? total : 1;
			$scope.questionsData[data.index].answers = data.result.answers;
		});

		socketio.on('msg_join_room', function () {
			console.log("Room: " + $stateParams.room + " joined.")
		});

		socketio.on('msg_close_question', function (data) {
			$scope.questionsData[data.qId].status = true;
		});

		vm.init = function () {
			var data = {};
			data.room = $stateParams.room;
			data.owner = $rootScope.username;
			socketio.emit('msg_get_questions', data, null);
		};

		vm.answer = function (question, index) {
			question.answer = question.possibilities[index];

			var data = {};
			data.roomId = $stateParams.room;
			data.qId = question.qId;
			data.answerIndex = index;

			socketio.emit('msg_answer_question', data, null);
		}
	}
})();
