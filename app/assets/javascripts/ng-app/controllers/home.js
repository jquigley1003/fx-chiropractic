angular.module('fxChiropracticApp')
  .controller('HomeCtrl',['$scope', function ($scope) {
    
    var homeCtrl = this;

    $scope.images = [
      {src: 'http://i.imgur.com/p2kKPqj.jpg', title: 'FX Chiropractic & Performance'},
      {src: 'http://i.imgur.com/WvFOExx.jpg', title: 'Visit Us At Our New Location!'},
      {src: 'http://i.imgur.com/YHQ1SxA.jpg', title: 'FX Chiropractic'},
      {src: 'http://i.imgur.com/DOPFEZG.jpg', title: 'The Best Chiropractic Care in Atlanta!'},
      {src: 'http://i.imgur.com/LKzHoYx.jpg', title: 'FX Chiropractic & Performance'}
    ];

   
  }]);