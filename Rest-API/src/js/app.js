angular.module('Myapp', [
  'ngRoute',
  'mobile-angular-ui',
  'Myapp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});