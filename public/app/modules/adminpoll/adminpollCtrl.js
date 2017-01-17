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

	Adminpoll.$inject = ['$scope', '$state', '$stateParams', '$rootScope', 'AdminpollService', 'socketio'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Adminpoll($scope, $state, $stateParams, $rootScope, AdminpollService, socketio) {

		var vm = this;

        if(!$rootScope.isLogged){
            $state.transitionTo('login');
        }

        $rootScope.currentRoom = $stateParams.room;

        //Form field
        var fields = [{name:'Solution 1', val:''}, {name:'Solution 2', val:''}];
        vm.showme = false;
        $scope.formData = {};
        $scope.formData.question;
        $scope.formData.correctAnswerIndex;
        $scope.formData.dynamicFields = fields;


        //Question field
        var questionsData = [];
        $scope.questionsData = questionsData;

        vm.service = AdminpollService;
        vm.service.init();

        vm.submit = AdminpollService.submit;
        vm.close = AdminpollService.close;

        socketio.on('msg_update_question', function (data) {
            data[0].total = 1;
            data[0].showme = true;
            $scope.questionsData.push(data[0]);
        });

        socketio.on('msg_update_questions', function (data) {
            console.log(data);
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
            console.log(data);
            console.log($scope.questionsData[data.index].answers);

            var total = 0;
            for(var i = 0; i < data.result.answers.length; i++){
                total += data.result.answers[i];
            }

            $scope.questionsData[data.index].total = total >= 1 ? total : 1;

            $scope.questionsData[data.index].answers = data.result.answers;
            console.log($scope.questionsData[data.index].answers);
            console.log("Result updated!");
        });

        socketio.on('msg_join_room', function () {
            console.log("Room: " + $stateParams.room + " joined.")
        });

        socketio.on('msg_status', function (data) {
            vm.success = data.status == 'ok';
            vm.msg = ' - ' + data.msg;
        });

        socketio.on('msg_close_question', function (data) {
            $scope.questionsData[data.qId].status = true;
        });

        vm.addRow = function() {
            var newItemNum = $scope.formData.dynamicFields.length+1;
            $scope.formData.dynamicFields.push( {name: 'Solution '+newItemNum, val: ''});
        };

        vm.removeRow = function () {
            if($scope.formData.dynamicFields.length > 2){
                $scope.formData.dynamicFields.pop();
            }
        };

        vm.showQuestionForm = function () {

            vm.showme = !vm.showme;

            if(vm.showme){
                //Form field
                var fields = [{name:'Solution 1', val:''}, {name:'Solution 2', val:''}];
                $scope.formData = {};
                $scope.formData.question;
                $scope.formData.correctAnswerIndex;
                $scope.formData.dynamicFields = fields;
            }
        };
	}
})();
