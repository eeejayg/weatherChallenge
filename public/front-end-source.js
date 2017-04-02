

angular.module('WeatherChallenge', [
  'modules.weatherTile'
])

  .controller('MainController', function MainController( $scope, $http ) {

    var idx = Math.floor(Math.random() * quotes.length);

    $scope.quote = quotes[idx].quote;
    $scope.attribution = quotes[idx].attribution;
    
    $http.get("/weather")
      .success(function (data) {
        $scope.data = data;
      })
      .error(function (data) {
        console.log("error getting weather");
      });

  });



