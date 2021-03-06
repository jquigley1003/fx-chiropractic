angular.module('fxChiropracticApp', [
  'ngAnimate',
  'ngResource',
  'ngMessages',
  'ngFlash',
  'ngFileUpload',
  'ui.router',
  'templates',
  'Devise'
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
    .state('editPost', {
      url:'/post/:id/edit',
      templateUrl: 'post_edit.html',
      controller: 'PostEditCtrl as postEditCtrl'
    })                                              
  $stateProvider
    .state('contactUs', {
      url:'/contact-us',
      templateUrl: 'contact2.html',
      controller: 'ContactCtrl'
    })    
  $stateProvider
    .state('login', {
      url:'/login',
      templateUrl: '_login.html',
      controller: 'AuthCtrl'
      // onEnter: ['$state', 'Auth', function($state, Auth) {
      //   Auth.currentUser().then(function (){
      //     $state.go('home');
      //   })
      // }]
    })
  $stateProvider
    .state('register', {
      url:'/register',
      templateUrl: '_register.html',
      controller: 'AuthCtrl'
      // onEnter: ['$state', 'Auth', function($state, Auth) {
      //   Auth.currentUser().then(function (){
      //     $state.go('home');
      //   })
      // }]
    });
    $urlRouterProvider.otherwise('/');
  }])
