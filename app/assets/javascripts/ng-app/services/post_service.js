angular.module('fxChiropracticApp')
  .service('postService',['$resource', function($resource) {
  return $resource('/posts/:id.json', { id: '@id' },
    {
      update: { method: 'PUT'}
    }
  );
}]);