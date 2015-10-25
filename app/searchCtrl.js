(function(){

	'use strict';

	angular
	.module('tarotApp')
    .controller('SearchCtrl', SearchCtrl);

    function SearchCtrl($http){
    	var vm = this;
    	$http.get('app/DB/Database.php').success(function(data) {
          vm.test = "working";
	      vm.cards = data;
	      vm.query = "";
  		});
    }

})();