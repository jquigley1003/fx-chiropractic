angular.module('fxChiropracticApp', [
  'ngAnimate',
  'ui.router',
  'templates'
])
  .config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl as homeCtrl'
    })
  $stateProvider
    .state('about', {
      url:'/about',
      templateUrl: 'about.html',
      controller: 'HomeCtrl as homeCtrl'
    })
  $stateProvider
    .state('homeTwo', {
      url:'/home-two',
      templateUrl: 'home_two.html',
      controller: 'HomeCtrl as homeCtrl'
    });                                 
    console.log('ui-router is alive!');
  }])
  .run(['$state', function($state) {
    $state.go('home'); //make a transition to home state when app starts
  }]);