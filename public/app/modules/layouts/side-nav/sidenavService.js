(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('openaudit')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'adminpoll',
							name: 'Adminpoll'
					},
			    
					{
						link: 'activepoll',
							name: 'Activepoll'
					},
			    
					{
						link: 'passivepoll',
							name: 'Passivepoll'
					},
			    
					{
						link: 'managerooms',
							name: 'Managerooms'
					},
			    
					{
						link: 'watchrooms',
							name: 'Watchrooms'
					},
			    
					{
						link: 'login',
							name: 'Login'
					},
			    
					{
						link: 'register',
							name: 'Register'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
