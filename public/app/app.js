(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('openaudit', [
		'ngResource',
		'ngAria',
		'ui.bootstrap',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		//'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'adminpoll',
		'activepoll',
		'passivepoll',
		'managerooms',
		'watchrooms',
		'login',
	]);

})();
