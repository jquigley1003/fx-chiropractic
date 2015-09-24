angular.module('fxChiropracticApp')
  .controller('HomeCtrl',['$scope', function ($scope) {
    
    var homeCtrl = this;

    homeCtrl.images = [
      {src: 'http://i.imgur.com/p2kKPqj.jpg', title: 'FX Chiropractic & Performance'},
      {src: 'http://i.imgur.com/WvFOExx.jpg', title: 'Visit Us At Our New Location!'},
      {src: 'http://i.imgur.com/YHQ1SxA.jpg', title: 'FX Chiropractic'},
      {src: 'http://i.imgur.com/DOPFEZG.jpg', title: 'The Best Chiropractic Care in Atlanta!'},
      {src: 'http://i.imgur.com/LKzHoYx.jpg', title: 'FX Chiropractic & Performance'}
    ];

    homeCtrl.imagesTwo = [
      {src: 'http://i.imgur.com/dW1NnQ6.jpg', title: 'FX Chiropractic & Performance', logoLeft: 'http://i.imgur.com/uc2SZaw.png', logoRight: 'http://i.imgur.com/StpbEkl.png'},
      {src: 'http://i.imgur.com/ui3o5Dv.jpg', title: 'Visit Us At Our New Location!'},
      {src: 'http://i.imgur.com/0g5iOrq.jpg', title: 'FX Chiropractic'},
      {src: 'http://i.imgur.com/Cm3FoZj.jpg', title: 'The Best Chiropractic Care in Atlanta!'},
      {src: 'http://i.imgur.com/Sbi3OEm.jpg', title: 'FX Chiropractic & Performance'}
    ];    

   
  }]);