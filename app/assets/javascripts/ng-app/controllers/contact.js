angular.module('fxChiropracticApp')
  .controller('ContactCtrl',['$scope', 'contactService', '$http', function ($scope, contactService, $http) {
    
    // var contactCtrl = this;

    $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (var d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
      method : 'POST',
      url : 'http://localhost:3000/process.php',
      data : param($scope.formData), // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
  // $scope.submitForm = function(param) {
  //   var contacts = contactService.query(function(param) {
  //     $scope.contact = contacts;
  //     $scope.contact.$create;
  //   })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };


  }]);