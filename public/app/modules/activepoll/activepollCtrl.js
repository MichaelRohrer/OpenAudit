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

	Activepoll.$inject = ['$scope', '$stateParams', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Activepoll($scope, $stateParams, socketio) {

		var vm = this;

		//Question field
		var questionsData = [];
		$scope.questionsData = questionsData;

		socketio.on('msg_update_questions', function (data) {
			data[0].total = 1;
			data[0].showme = true;
			data[0].answer = null;
			$scope.questionsData.push(data[0]);
		});

		socketio.on('msg_update_question_results', function (data) {
			console.log("Result updated!");
			console.log(data);
		});

		vm.answer = function (question, index) {
			question.answer = question.possibilities[index];

			var data = {};
			data.roomId = $stateParams.room;
			data.qId = question.qId;
			data.answerIndex = index;

			socketio.emit('msg_answer_question', data, null);
			console.log('Answer sent!');
		}
	}
})();
