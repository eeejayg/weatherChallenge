

angular.module('modules.weatherTile', [
])

    .directive('weatherTile', function () {
        return {
            scope: {
              weatherDayItem : "="
            },
            restrict   : 'E',
            templateUrl: 'weatherTile.tpl.html',
            controller: 'weatherTileController'
        };
    })

    .controller('weatherTileController', function($scope) {
      $scope.weatherDate = new Date($scope.weatherDayItem.time * 1000);
    });