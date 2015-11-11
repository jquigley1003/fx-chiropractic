angular.module('fxChiropracticApp')
  .controller('ContactCtrl',['$scope', 'contactService', function ($scope, contactService) {
    $scope.newContact = new contactService();

    $scope.submitForm = function() {
      contactService.create({ contact: $scope.formData }, function() {
        if (contactService.create) {
          console.log($scope.formData.name)
          $scope.formData = {};
        }
        else{
          console.log($scope.formData.message)
        }
      });
    };

  }]);