(function(){

	'use strict';

	angular.module('tarotApp')
	.config(config);
		
	function config($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');
			
			$stateProvider
			
			.state('reading', {
				url: '/reading',
				templateUrl: 'app/views/readings.html',
				controller: 'DeckCtrl as deck'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'app/views/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/views/about.html'
			})
			.state('search', {
				url: '/search',
				templateUrl: 'app/views/search.html',
				controller: 'SearchCtrl as search'

			})
	}	

})();