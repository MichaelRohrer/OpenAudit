(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:passivepollCtrl
	 * @description
	 * # passivepollCtrl
	 * Controller of the app
	 */

	angular
		.module('passivepoll')
		.controller('PassivepollCtrl', Passivepoll);

	Passivepoll.$inject = ['$scope', '$rootScope', '$stateParams', '$state', 'PassivepollService', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Passivepoll($scope, $rootScope, $stateParams, $state, PassivepollService, socketio) {
		/*jshint validthis: true */
		var vm = this;

		if(!$rootScope.isLogged){
			$state.transitionTo('login');
		}

		$rootScope.currentRoom = $stateParams.room;

		//Question field
		var questionsData = [];
		$scope.questionsData = questionsData;

		vm.service = PassivepollService;
		vm.service.init();

		socketio.on('msg_update_question', function (data) {
			data[0].total = 1;
			data[0].showme = true;
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
	}
})();
