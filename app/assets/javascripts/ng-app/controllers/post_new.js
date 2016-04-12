angular.module('fxChiropracticApp')
.controller('PostNewCtrl', ['$scope', '$state', '$stateParams', 'postService', 'Auth', 'Flash',
  function ($scope, $state, $stateParams, postService, Auth, Flash) {

    postNewCtrl = this;

    $scope.post = new postService(); // create a new instance
    
    postNewCtrl.addPost = function(){
      Auth.currentUser().then(function(user) {
      if (user.admin) {
        $scope.post.$save(function (){
          $state.go('blog');
          var message = '<strong>Congratulations!</strong> You created a post titled: ' + $scope.post.title;
          Flash.create('success', message);          
          console.log(user.email + ', you created a post titled: ' + $scope.post.title +'!'); // => {id: 1, ect: '...'}
        });        
      }
      else {
        $state.go('home');
        var message = '<strong>You are not authorized to create posts.</strong> Please contact us if you have questions.';
        Flash.create('warning', message);        
        console.log(user.email + ', you are not authorized to create posts!');
      }      
        }, function(error) {
          $state.go('home');
          var message = '<strong>There was an error!</strong> You may not be logged in or not authorized.';
          Flash.create('warning', message);
          console.log('You need to log in or do not have authority!');
      });
    };
  }]);