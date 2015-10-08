(function(){

	'use strict';

	angular
	.module('app')
    //todo: update directive to use Deckctrl not deckCtrl
    .controller('DeckCtrl', DeckCtrl);

    function DeckCtrl($scope, $http) {
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
    }

})();