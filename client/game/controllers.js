angular.module('game', ['game.services'])

.controller('GameController', function($scope) {
  $scope.getTile = function() {
    var row = Math.floor((Math.random() * 7) + 0);
    var column = Math.floor((Math.random() * 7) + 0);
    return [row, column];
  };

  $scope.occupied = [[false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false],
                     [false, false, false, false, false, false, false, false]];

  $scope.start = function() {
    for(var i = 0; i < 4; i++) {
      var duplicate = true;
      while(duplicate) {
        var tile = $scope.getTile();
        if(!$scope.occupied[tile[0]][tile[1]]) {
          $scope.occupied[tile[0]][tile[1]] = true;
          duplicate = false;
        }
      }
    }
  };

  $scope.makeTile = function(coords) {
    var letterAscii = Math.floor(Math.random() * (90 - 65)) + 65;
    var letter = String.fromCharCode(letterAscii);
    return letter;
  };
})

.directive('ngTile', function() {
  return {
    restrict: 'A',
    template: '<div class="tile"><h1>{{occupied[3][4]}}</h1></div>'
  };
});