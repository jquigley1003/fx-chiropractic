angular.module('fxChiropracticApp')
.controller('PostEditCtrl', ['$scope', '$state', '$stateParams', '$timeout', 'postService', 'myResources', 'Auth', 'Flash', 'Upload',
  function ($scope, $state, $stateParams, $timeout, postService, myResources, Auth, Flash, Upload) {

    postEditCtrl = this;

    postEditCtrl.editPost = function() { // Edit a post. Issues a UPDATE to /api/posts/:id
      Auth.currentUser().then(function(user) {
      if (user.admin) {
        postEditCtrl.post.$update(function(){
          $state.go('blog');
          var message = '<strong>Congratulations!</strong> You updated the post titled: ' + postEditCtrl.post.title;
          Flash.create('success', message);          
          console.log(user.email + 'Congratulations, you updated the post titled: ' + postEditCtrl.post.title); // => {id: 1, ect: '...'}
        });

        $scope.uploadPostImg = uploadImageHandler($scope, Upload, $timeout);       
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
      $scope.myResource = postService.get({id: $stateParams.id});  
      // postEditCtrl.post = postService.get({id: $stateParams.id});  
    };

    postEditCtrl.loadPost()

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
            url: 'posts/:id.json',
            method: 'PUT',
            // fields: { 
            //   'post[title]': postEditCtrl.post.title,
            //   'post[contents]': postEditCtrl.post.contents
            //  },
            data: {
                    title : postEditCtrl.post.title,
                    contents : postEditCtrl.post.contents
                  },
            file: file,
            fileFormDataName: 'post[image]',
            // sendFieldsAs: 'json'
            formDataAppender: function(fd, key, val) {
              if (angular.isArray(val)) {
                angular.forEach(val, function(v) {
                  fd.append('user['+key+']', v);
                });
              } else {
                fd.append('user['+key+']', val);
              }
            }
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
    $scope.save = function () {
    // $scope.save = function (file) {
        // Upload.upload({
        //   url: '/posts/' + postEditCtrl.post.id + '.json',
        //   method: 'PUT',
        //   headers: { 'Content-Type': true },
        //   fields: { 
        //     'post[title]': postEditCtrl.post.title,
        //     'post[contents]': postEditCtrl.post.contents
        //   },
        //   file: file,
        //   fileFormDataName: 'post[image]',
        //   sendFieldsAs: 'json'
        // }).then(function (resp) {
        //   console.log('Success ' + resp.config.file.name + ' uploaded. Response: ' + resp.data);
        // }, function (resp) {
        //   console.log('Error status: ' + resp.status);
        // }, function (evt) {
        //   var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //   console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
        // });
      editWithAttachment($scope.myResource, $scope.myResource.id)      
    };

  }]);