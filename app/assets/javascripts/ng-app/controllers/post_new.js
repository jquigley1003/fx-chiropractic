angular.module('fxChiropracticApp')
.controller('PostNewCtrl', ['$scope', '$state', '$stateParams','$timeout', 'postService', 'Auth', 'Flash', 'Upload',
  function ($scope, $state, $stateParams, $timeout, postService, Auth, Flash, Upload) {

    postNewCtrl = this;
    var errorImageHandler;
    var uploadImageHandler;

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

        $scope.uploadPostImg = uploadImageHandler($scope, Upload, $timeout);       
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

      // $scope.upload = function (file) {
      //   $scope.upload = Upload.upload({
      //     url: '/posts/' + '.json',
      //     method: 'POST',
      //     fields: {
      //       'post[title]': $scope.post.title,
      //       'post[contents]': $scope.post.contents
      //     },
      //     file: file,
      //     fileFormDataName: 'post[image]'
      //   });
      // }

      errorImageHandler = function ($scope){
        return function error(httpResponse){
          $scope.errors = httpResponse;
        };
      };

      uploadImageHandler = function ($scope, Upload, $timeout) {
        return function(file) {
          if (file && !file.$error) {

            $scope.file = file;
            file.upload = Upload.upload({
              url: 'posts/' + $scope.post.id + '.json',
              method: 'PUT',
              file: file,
              fileFormDataName: 'post[image]'
            });

            file.upload.then(function (response) {
              $timeout(function () {
                file.result = response.data;
              });
            },function (response) {
                if (response.status > 0){
                  console.log(response.status + ': ' + response.data);
                  errorImageHandler($scope)(response.status + ': ' + response.data);
                }
              }
            );

            file.upload.progress(function (evt) {
              file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
             });
          }
        }
      };
    };
  }]);