angular.module('fxChiropracticApp')
  .service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});