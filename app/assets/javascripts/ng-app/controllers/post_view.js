angular.module('fxChiropracticApp')
.controller('PostViewCtrl',
  ['$scope', '$state', '$stateParams', 'postService', 'popupService', 'Auth', 'Flash',
  function ($scope, $state, $stateParams, postService, popupService, Auth, Flash) {

    postViewCtrl = this;

    postViewCtrl.showPost = postService.get({id: $stateParams.id});

    postViewCtrl.signedIn = function() {
      Auth.currentUser().then(function(user) {
        postViewCtrl.user = user;
      }, function(error) {
            // unauthenticated error
        });
    };

    postViewCtrl.signedIn();

    postViewCtrl.deletePost = function(post) { // Delete a post. Issues a DELETE to /api/posts/:id
      Auth.currentUser().then(function(user) {
      if (user.admin) {
        if (popupService.showPopup('Really delete this?')) {
          post.$delete(function() {
            $state.go('blog'); //redirect to blog page
            var message = '<strong>Congratulations!</strong> You updated the post titled: ' + postEditCtrl.post.title;
            Flash.create('success', message);          
            console.log(user); // => {id: 1, ect: '...'}
          });
        }       
      }
      else {
        $state.go('home');
        var message = '<strong>You are not authorized.</strong> Please contact us if you have questions.';
        Flash.create('warning', message);        
        console.log(user + ', you are not authorized!');
      }      
        }, function(error) {
          $state.go('home');
          var message = '<strong>There was an error!</strong> You may not be logged in or not authorized.';
          Flash.create('warning', message);
          console.log('There was an error or not authorized');
      });
    };

    $scope.$on('devise:login', function (e, user){
      postViewCtrl.user = user;
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

    $scope.$on('devise:logout', function (e, user){
      postViewCtrl.user = {};
      $scope.signedIn = Auth.isAuthenticated();
      console.log($scope.signedIn);
    });

  }]);