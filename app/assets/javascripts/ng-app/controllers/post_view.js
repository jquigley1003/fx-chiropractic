angular.module('fxChiropracticApp')
.controller('PostViewCtrl', ['$scope', '$state', '$stateParams', 'postService',
  function ($scope, $state, $stateParams, postService) {

    postViewCtrl = this;

    postViewCtrl.showPost = postService.get({id: $stateParams.id});

  }]);