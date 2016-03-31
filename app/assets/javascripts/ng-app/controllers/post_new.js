angular.module('fxChiropracticApp')
.controller('PostNewCtrl', ['$scope', '$state', '$stateParams', 'postService',
  function ($scope, $state, $stateParams, postService) {

    postNewCtrl = this;

    $scope.post = new postService(); // create a new instance
    
    postNewCtrl.addPost = function(){
      $scope.post.$save(function (){
        $state.go('blog');
      });
    };
  }]);