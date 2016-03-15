angular.module('fxChiropracticApp')
.controller('PostCtrl', ['$scope', '$state', '$stateParams', 'postService',
  function ($scope, $state, $stateParams, postService) {

    postCtrl = this;

    postCtrl.posts = postService.query();

    postCtrl.viewPost = function(postId) {
      $state.go('postView', {id: postId})
    };

  }]);