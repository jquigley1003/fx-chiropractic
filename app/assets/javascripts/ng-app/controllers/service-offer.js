angular.module('fxChiropracticApp')
.controller('ServiceOfferCtrl', ['$scope', '$location', '$anchorScroll',

  function ($scope, $location, $anchorScroll) {

    serviceOfferCtrl = this;
    
    serviceOfferCtrl.gotoDescription = function(divDescription) {

      serviceOfferCtrl.showDetails = divDescription;

      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('serviceDescription');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);