angular.module('fxChiropracticApp')
.controller('PostCtrl', ['$scope', '$state', '$stateParams', 'postService', 'popupService',
  function ($scope, $state, $stateParams, postService, popupService) {

    postCtrl = this;

    postCtrl.posts = postService.query();

    postCtrl.viewPost = function(postId) {
      $state.go('postView', {id: postId})
    };

    postCtrl.deletePost = function(post) { // Delete a post. Issues a DELETE to /api/posts/:id
      if (popupService.showPopup('Really delete this?')) {
        post.$delete(function() {
          $state.go($state.current, {}, {reload: true}); //redirect to blog page
        });
      }
    };

  }]);