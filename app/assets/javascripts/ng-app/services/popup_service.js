angular.module('fxChiropracticApp')
  .service('popupService',['$window', function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
}]);