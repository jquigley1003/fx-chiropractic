angular.module('fxChiropracticApp', [
  'ngAnimate',
  'ngResource',
  'ngMessages',
  'ui.router',
  'templates'
])
  .config(['$stateProvider','$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {
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
    .state('services', {
      url:'/services',
      templateUrl: 'services.html',
      controller: 'ServiceOfferCtrl as serviceOfferCtrl'
    })
  $stateProvider
    .state('schedule', {
      url:'/schedule',
      templateUrl: 'schedule.html',
      controller: 'HomeCtrl as homeCtrl'
    })
  $stateProvider
    .state('blog', {
      url:'/blog',
      templateUrl: 'blog.html',
      controller: 'PostCtrl as postCtrl'
    })
  $stateProvider
    .state('viewPost', {
      url:'/post/:id/view',
      templateUrl: 'post_view.html',
      controller: 'PostViewCtrl as postViewCtrl'
    })
  $stateProvider
    .state('newPost', {
      url:'/post/new',
      templateUrl: 'post_new.html',
      controller: 'PostNewCtrl as postNewCtrl'
    })                          
  $stateProvider
    .state('contactUs', {
      url:'/contact-us',
      templateUrl: 'contact2.html',
      controller: 'ContactCtrl'
    })    
  $stateProvider
    .state('homeThree', {
      url:'/home-three',
      templateUrl: 'home_three.html',
      controller: 'HomeCtrl as homeCtrl'
    })
  $stateProvider
    .state('aboutTwo', {
      url:'/about-two',
      templateUrl: 'about_two.html',
      controller: 'HomeCtrl as homeCtrl'
    });
    $urlRouterProvider.otherwise('/');
  }])
