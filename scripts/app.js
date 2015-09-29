var app = angular.module('tarotApp', ['ui.router']);

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

        })
        
        
    });


app.controller('deckCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('scripts/data.php').success(function(data) {
      $scope.cards = data;
	
		var reading = pick3();
		$scope.reading = {'past': reading[0], 'present': reading[1], 'future': reading[2]};

		function pick3(){
			var selections = [];
			var tmp;

			for (var i = 0; i < 3; i++){
				// assigns a random card to tmp
				tmp = $scope.cards[Math.floor(Math.random() * $scope.cards.length)];

				// if the tmp card has already been chosen and is in the selections array,
				// assign a new random card to tmp
				while (selections.indexOf(tmp) >= 0){
					tmp = $scope.cards[Math.floor(Math.random() * $scope.cards.length)];
				}

				// assigns the unique card to the selections array 
				selections[i] = tmp;
			}

			return selections;
		}



    });
    
  }]);
