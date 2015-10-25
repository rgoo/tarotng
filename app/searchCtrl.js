(function(){

	'use strict';

	angular
	.module('tarotApp')
    .controller('SearchCtrl', SearchCtrl);

    function SearchCtrl($http){
    	var vm = this;
    	$http.get('scripts/data.php').success(function(data) {
	      vm.cards = data;
	      vm.query = "";
  		});
    }

})();