angular.module('fxChiropracticApp')
.controller('PostCtrl', ['$scope', '$state', '$stateParams', 'postService', 'popupService', 'Auth', 'Flash',
  function ($scope, $state, $stateParams, postService, popupService, Auth, Flash) {

    postCtrl = this;

    postCtrl.posts = postService.query();

    postCtrl.viewPost = function(postId) {
      $state.go('postView', {id: postId})
    };

    postCtrl.deletePost = function(post) { // Delete a post. Issues a DELETE to /api/posts/:id
      Auth.currentUser().then(function(user) {
      if (user.admin) {
        if (popupService.showPopup('Really delete this?')) {
          post.$delete(function() {
            $state.go($state.current, {}, {reload: true}); //redirect to blog page; //redirect to blog page
            var message = '<strong>Congratulations!</strong> You deleted: ' + post.title;
            Flash.create('success', message);          
            console.log(user.email + ', you deleted ' + post.title +'!'); // => {id: 1, ect: '...'}
          });
        }       
      }
      else {
        $state.go('home');
        var message = '<strong>You are not authorized.</strong> Please contact us if you have questions.';
        Flash.create('warning', message);        
        console.log(user.email + ', you are not authorized to delete ' + post.title +'!');
      }      
        }, function(error) {
          $state.go('home');
          var message = '<strong>There was an error!</strong> You may not be logged in or not authorized.';
          Flash.create('warning', message);
          console.log('You are not logged in or not authorized');
      });
    };

    postCtrl.signedIn = function() {
      Auth.currentUser().then(function(user) {
        postCtrl.user = user;
      }, function(error) {
            // unauthenticated error
        });
    };

    postCtrl.signedIn();

    $scope.$on('devise:login', function (e, user){
      postCtrl.user = user;
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

    $scope.$on('devise:logout', function (e, user){
      postCtrl.user = {};
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

  }]);