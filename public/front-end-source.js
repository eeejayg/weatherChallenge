

angular.module('WeatherChallenge', [
  'modules.weatherTile'
])

  .controller('MainController', function MainController( $scope, $http ) {
      $http.get("/weather")
        .success(function (data) {
          console.log(data);
          $scope.data = data;
        })
        .error(function (data) {
          console.log("error getting weather");
        })
    }
  );



