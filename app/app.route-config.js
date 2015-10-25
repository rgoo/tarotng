(function(){

	'use strict';

	angular.module('tarotApp')
	.config(config);
		
	function config($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');
			
			$stateProvider
			
			.state('reading', {
				url: '/reading',
				templateUrl: 'views/readings.html',
				controller: 'DeckCtrl as deck'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html'
			})
			.state('search', {
				url: '/search',
				templateUrl: 'views/search.html',
				controller: 'SearchCtrl as search'

			})
	}	

})();