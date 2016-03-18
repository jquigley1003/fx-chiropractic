angular.module('fxChiropracticApp')
.controller('PostViewCtrl', ['$scope', '$state', '$stateParams', 'postService', 'popupService',
  function ($scope, $state, $stateParams, postService, popupService) {

    postViewCtrl = this;

    postViewCtrl.showPost = postService.get({id: $stateParams.id});

    postViewCtrl.deletePost = function(post) { // Delete a post. Issues a DELETE to /api/posts/:id
      if (popupService.showPopup('Really delete this?')) {
        post.$delete(function() {
          $state.go('blog'); //redirect to blog page
        });
      }
    };

  }]);