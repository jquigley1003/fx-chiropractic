angular.module('fxChiropracticApp')
  .controller('HomeCtrl',['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    
    var homeCtrl = this;

    $scope.active = false;

    homeCtrl.images = [
      {src: 'http://i.imgur.com/p2kKPqj.jpg', title: 'FX Chiropractic & Performance'},
      {src: 'http://i.imgur.com/WvFOExx.jpg', title: 'Visit Us At Our New Location!'},
      {src: 'http://i.imgur.com/YHQ1SxA.jpg', title: 'FX Chiropractic'},
      {src: 'http://i.imgur.com/DOPFEZG.jpg', title: 'The Best Chiropractic Care in Atlanta!'},
      {src: 'http://i.imgur.com/LKzHoYx.jpg', title: 'FX Chiropractic & Performance'}
    ];

    homeCtrl.imagesTwo = [
      {src: 'http://i.imgur.com/dW1NnQ6.jpg', title: 'Two: FX Chiropractic & Performance', logoLeft: 'http://i.imgur.com/SEbyXNI.png', logoRight: 'http://i.imgur.com/wSfnbi1.png'},
      {src: 'http://i.imgur.com/ui3o5Dv.jpg', title: 'Two: Visit Us At Our New Location!'},
      {src: 'http://i.imgur.com/0g5iOrq.jpg', title: 'Two: FX Chiropractic'},
      {src: 'http://i.imgur.com/Cm3FoZj.jpg', title: 'Two: The Best Chiropractic Care in Atlanta!'},
      {src: 'http://i.imgur.com/Sbi3OEm.jpg', title: 'Two: FX Chiropractic & Performance'}
    ];    

    homeCtrl.imagesThree = [
      {src: 'http://i.imgur.com/dW1NnQ6.jpg', title: 'Three: FX Chiropractic & Performance', logoLeft: 'http://i.imgur.com/SEbyXNI.png', logoRight: 'http://i.imgur.com/wSfnbi1.png'},
      {src: 'http://i.imgur.com/ui3o5Dv.jpg', title: 'Three: Visit Us At Our New Location!'},
      {src: 'http://i.imgur.com/0g5iOrq.jpg', title: 'Three: FX Chiropractic'},
      {src: 'http://i.imgur.com/Cm3FoZj.jpg', title: 'Three: The Best Chiropractic Care in Atlanta!'},
      {src: 'http://i.imgur.com/Sbi3OEm.jpg', title: 'Three: FX Chiropractic & Performance'}
    ];

    homeCtrl.currentUrl = "";
    // When the location changes, capture the state of the full URL.
    $scope.$on(
        "$locationChangeSuccess",
        function locationChanged() {
            homeCtrl.currentUrl = $location.url();
            $scope.active = !$scope.active;     
        }
    );

    homeCtrl.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('contact');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);