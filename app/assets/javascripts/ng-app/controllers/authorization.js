angular.module('fxChiropracticApp')
  .controller('AuthCtrl', ['$scope', '$state', 'Auth', 'Flash',
    function($scope, $state, Auth, Flash){

    $scope.login = function(){
      Auth.login($scope.user).then(function(){
        $state.go('home');
      });
    };

    $scope.register = function(){
      $state.go('home');
      var message = '<strong>Sorry, We are not accepting registrations at this time.</strong> Please contact us if you have questions.';
      Flash.create('warning', message);        
      console.log('Controller is not accepting registrations.');


      // Auth.register($scope.user).then(function(){
      //   $state.go('home');
      // })
    };
  }]);