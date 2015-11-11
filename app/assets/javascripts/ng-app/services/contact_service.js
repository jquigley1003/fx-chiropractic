angular.module('fxChiropracticApp')
  .service('contactService',['$resource', function($resource) {
  return $resource('/contacts/:id', { id: '@id' },
    {
      'new':  { method: 'POST' },      
      'create':  { method: 'POST' }
    }
  );
}]);