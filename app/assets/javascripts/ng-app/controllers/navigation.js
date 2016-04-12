angular.module('fxChiropracticApp')
  .controller('NavCtrl',['$scope','$location','$anchorScroll', 'Auth',  function ($scope, $location, $anchorScroll, Auth) {

    $scope.signedIn = Auth.isAuthenticated();

    $scope.logout = function(){
      Auth.logout($scope.user);
    };

    Auth.currentUser().then(function (user){
      $scope.user = user; 
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

    $scope.gotoBottom = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('contact');

      // call $anchorScroll()
      $anchorScroll();
    };

  }]);