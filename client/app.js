angular.module('2048Scrabble', ['ngRoute', 'game'])

.config(function($routeProvider) {
 $routeProvider
  .when('/', {
   templateUrl: 'game/game.html',
   controller: 'GameController'
  })
  .when('/*', {
   templateUrl: 'game/game.html',
   controller: 'GameController'
  });
});