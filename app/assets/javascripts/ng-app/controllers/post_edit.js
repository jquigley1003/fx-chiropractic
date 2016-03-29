angular.module('fxChiropracticApp')
.controller('PostEditCtrl', ['$scope', '$state', '$stateParams', 'postService',
  function ($scope, $state, $stateParams, postService) {

    postEditCtrl = this;

    postEditCtrl.editPost = function() { // Delete a post. Issues a DELETE to /api/posts/:id
      postEditCtrl.post.$update(function(){
          $state.go('blog');
      });
    };

    postEditCtrl.loadPost = function() {
      postEditCtrl.post = postService.get({id: $stateParams.id});  
    };

    postEditCtrl.loadPost()

  }]);