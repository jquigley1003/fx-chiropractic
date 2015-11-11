angular.module('fxChiropracticApp')
  .controller('ContactCtrl',['$scope', '$state', 'contactService',  function ($scope, $state, contactService) {
    $scope.newContact = new contactService();

    $scope.submitForm = function() {
      contactService.create({ contact: $scope.formData }, function() {
        if (contactService.create) {
          console.log($scope.formData.name)
          $scope.formData = {};
          $state.go('home');
        }
        else{
          console.log($scope.formData.message)
        }
      });
    };

  }]);