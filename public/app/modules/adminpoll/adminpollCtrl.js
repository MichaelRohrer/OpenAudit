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

	Adminpoll.$inject = ['$scope', '$http', '$stateParams', '$rootScope'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Adminpoll($scope, $http, $stateParams, $rootScope) {

		var vm = this;

		vm.showme = false;

        var fields = [{name:'Answer 1', val:''}, {name:'Answer 2', val:''}];

        $scope.formData = {};
        $scope.formData.question;
        $scope.formData.dynamicFields = fields;

        vm.showme1 = false;
		vm.data = [70, 20, 10];
		vm.labels = ["Yes", "No", "Maybe"];


        console.log($stateParams.room);


        vm.submit = function (formData) {

            var results = [];
            var possibilities = [];
            for(var i = 0; i < formData.dynamicFields.length; ++i){
                results.push(0);
                possibilities.push(formData.dynamicFields[i].val);
            }

            $http({
                method : "POST",
                url : "/rooms/" + $stateParams.room,
                headers: {
                    'Content-Type': 'application/json',
                    'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
                },
                data: {
                    question : formData.question,
                    possibilities : possibilities,
                    answers : results
                }
            }).then(function (res) {
                if(res.status == 201){
                    console.log("Success");
                }
                else{
                    console.log("Error")
                }
            });
        };

        vm.addRow = function() {
            var newItemNum = $scope.formData.dynamicFields.length+1;
            $scope.formData.dynamicFields.push( {name: 'Answer '+newItemNum, val: ''});
        };

        vm.removeRow = function () {

            if($scope.formData.dynamicFields.length > 2){
                $scope.formData.dynamicFields.pop();
            }
        };
	}
})();
