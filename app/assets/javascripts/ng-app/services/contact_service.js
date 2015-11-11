angular.module('fxChiropracticApp')
  .service('contactService',['$resource', function($resource) {
  return $resource("http://localhost:3000/contacts/:id", { id: '@id' },
    {
      'new':  { method: 'POST' },      
      'create':  { method: 'POST' }
    }
  );
}]);