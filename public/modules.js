

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

      console.log($scope.weatherDayItem);

    });