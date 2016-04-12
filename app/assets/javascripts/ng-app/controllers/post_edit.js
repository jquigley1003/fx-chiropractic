angular.module('fxChiropracticApp')
.controller('PostEditCtrl', ['$scope', '$state', '$stateParams', 'postService', 'Auth', 'Flash',
  function ($scope, $state, $stateParams, postService, Auth, Flash) {

    postEditCtrl = this;

    postViewCtrl.signedIn = function() {

    };

    postEditCtrl.editPost = function() { // Edit a post. Issues a UPDATE to /api/posts/:id
      Auth.currentUser().then(function(user) {
      if (user.admin) {
        postEditCtrl.post.$update(function(){
          $state.go('blog');
          var message = '<strong>Congratulations!</strong> You updated the post titled: ' + postEditCtrl.post.title;
          Flash.create('success', message);          
          console.log(user.email + 'Congratulations, you updated the post titled: ' + postEditCtrl.post.title); // => {id: 1, ect: '...'}
        });
      }
      else {
        $state.go('home');
        var message = '<strong>You are not authorized to edit posts.</strong> Please contact us if you have questions.';
        Flash.create('warning', message);        
        console.log('You are not authorized to edit posts!');
      }      
        }, function(error) {
          $state.go('home');
          var message = '<strong>You are not authorized.</strong> Please contact us if you have questions.';
          Flash.create('warning', message);
          console.log('You are not logged in!');
      });
    };

    postEditCtrl.loadPost = function() {
      postEditCtrl.post = postService.get({id: $stateParams.id});  
    };

    postEditCtrl.loadPost()

  }]);