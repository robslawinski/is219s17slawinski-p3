app.controller('MainController', ['$scope',
	function($scope){
    //$scope.title = 'Top Ten Swordsmen in Books';
	$scope.title = 'IMDB + Robert Slawinski\'s Top 8 Movies';
	$scope.owner = 'Robert Slawinski';
	$scope.github = 'https://github.com/robslawinski/is219s17slawinski-p3';
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '10', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
	{
	  title:	'Akira', 
      iscore:	8.1,
      rating:	'R',
      runtime:	124,
      released:	new Date('1988', '06', '16'),
      country:	'Japan',
      posters:	['img/akira.jpg','img/akira2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0094625/',
      website:	'https://www.bandaivisual.co.jp/akira/',
      likes:	999,
      dislikes:	101,
      posterindex: 0
	},
	{
	  title:	'Blade Runner', 
      iscore:	8.2,
      rating:	'R',
      runtime:	117,
      released:	new Date('1982', '05', '25'),
      country:	'USA',
      posters:	['img/bladerunner.jpg','img/bladerunner2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0083658/',
      website:	'https://www.warnerbros.com/blade-runner',
      likes:	1000,
      dislikes:	200,
      posterindex: 0
	},
	{
	  title:	'Toy Story', 
      iscore:	8.3,
      rating:	'G',
      runtime:	81,
      released:	new Date('1995', '10', '22'),
      country:	'USA',
      posters:	['img/toystory.jpg','img/toystory2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0114709/',
      website:	'http://toystory.disney.com/',
      likes:	113,
      dislikes:	65,
      posterindex: 0
	}
]
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index)
	{
     $scope.movies[index].likes +=1;
	};
	$scope.dislike = function(index)
	{
	 $scope.movies[index].dislikes +=1;
	};
   
	$scope.posterClick = function(index){
	   $scope.movies[index].posterindex+=1;
	   if($scope.movies[index].posterindex >= $scope.movies[index].posters.length){
		  $scope.movies[index].posterindex = 0;
	   }
	};
	
	$scope.timeText = function(minutes){
		var hours = Math.floor(minutes / 60);
		var min = minutes % 60;
		console.log(hours + "h " + min + "m");
		var time =  hours + "h " + min + "m";
		return time;
	}
	
}]);
