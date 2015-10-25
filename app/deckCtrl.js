(function(){

	'use strict';

	angular
	.module('tarotApp')
    .controller('DeckCtrl', DeckCtrl);

    function DeckCtrl($http) {
    	var vm = this;

    	$http.get('app/DB/Database.php').success(function(data) {
    		vm.cards = data;

    		var reading = pick3();
    		vm.reading = {'past': reading[0], 'present': reading[1], 'future': reading[2]};

    		function pick3(){
    			var selections = [];
    			var tmp;

    			for (var i = 0; i < 3; i++){
						// assigns a random card to tmp
						tmp = vm.cards[Math.floor(Math.random() * vm.cards.length)];

						// if the tmp card has already been chosen and is in the selections array,
						// assign a new random card to tmp
						while (selections.indexOf(tmp) >= 0){
							tmp = vm.cards[Math.floor(Math.random() * vm.cards.length)];
						}

						// assigns the unique card to the selections array 
						selections[i] = tmp;
				}

				return selections;
			}
		});
    }

})();