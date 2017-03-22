'use strict'

angular.module('howmuchrentio', ['ui.router', 'ngMaterial', 'ngMessages']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  // Register states.
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/pages/home/home.html',
  });
});
