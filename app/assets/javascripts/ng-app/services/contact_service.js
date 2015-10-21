angular.module('fxChiropracticApp')
  .service('contactService',['$resource', function($resource) {
  return $resource("/api/v1/contacts/:id.json", { id: "@id" },
    {
      'new':  { method: 'POST' },      
      'create':  { method: 'POST' }
    }
  );
}]);