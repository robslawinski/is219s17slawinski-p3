app.controller('HomeController', ['$scope',
	function($scope){
    $scope.title = 'Top Ten Swordsmen in Books';
    $scope.promo = 'ayy';
    $scope.products = 
    [
      {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03','08'),
        cover: 'img/the-book-of-trees.jpg'
    	},
      {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08','01'),
        cover: 'img/program-or-be-programmed.jpg'
      },
      {
        name: 'I Have No Mouth and I Must Scream',
        price: 10,
        pubdate: new Date('1967', '02','15')
      },
       {
        name: 'Of Mice And Men',
        price: 10,
        pubdate: new Date('1937', '10','27')
      },
   ]
  }]);