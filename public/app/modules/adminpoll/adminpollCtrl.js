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

	Adminpoll.$inject = ['$scope', '$http', '$rootScope'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Adminpoll($scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.showme = false;

		vm.list = [1, 2];
		vm.counter = 2;


		vm.showme1 = false;
		vm.data = [70, 20, 10];
		vm.labels = ["Yes", "No", "Maybe"];


		var fields = [{name:'Answer 1', val:''}, {name:'Answer 2', val:''}];


		$scope.formData = {};
		$scope.formData.question;
		$scope.formData.dynamicFields = fields;


		//nous récupérons les valeurs du formulaires au click 'envoyer'
		//ici nous  ne feront qu'afficher les valeurs rentrées par l'utilisateur,
		//elles pourront être par méthode POST, etc
		$scope.sendFormValues= function(formValues){
			//the form values ready to be sent , etc
			$scope.SentValues=formValues.dynamicFields;
		};

		vm.submit = function (formData, $http, $rootScope) {

			var results = [];
			var possibilities = [];
			for(var i = 0; i < formData.dynamicFields.length; ++i){
				results.push(0);
				possibilities.push(formData.dynamicFields[i].val);
			}

            $http({
                method : "POST",
                url : "/rooms/" + $rootScope.room,
                headers: {
                    'Content-Type': 'application/json',
                    'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6ImhlcmUiLCJpYXQiOjE0ODE5ODA4MTN9._0TcNxJ4_-ZNQ49Ku1ck0YnPpSnCNwiA2NPzuyNIXdE'
                },
                data: {
                    question : formData.question,
                    possibilities : possibilities,
                    answers : results
                }
            }).then(function (err, res) {
                if(err){
                    console.log("Error");
                }
                else{
                    console.log("Success");
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
		}
	}
})();
