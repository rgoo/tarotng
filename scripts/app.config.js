(function(){

	'use strict';

	app.config(function($stateProvider, $urlRouterProvider) {


		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		
		.state('reading', {
			url: '/reading',
			templateUrl: 'views/readings.html',
			controller: 'deckCtrl'

		})
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'deckCtrl'

		}).state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'deckCtrl'

		}).state('search', {
			url: '/search',
			templateUrl: 'views/search.html',
			controller: 'searchCtrl'

		})
		
		
	});


})();