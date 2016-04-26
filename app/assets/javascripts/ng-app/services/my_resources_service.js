angular.module('fxChiropracticApp')
  .service('myResources',['Upload', function(Upload) {
    var sendPayload;
    sendPayload = function(formData, method, url) {
      var file, options;
      file = formData.file_attachment;
      options = {
        url: url,
        method: method,
        file: file,
        file_form_data_name: file.name,
        fields: {
          post: {
            title: formData.title,
            contents: formData.contents
          }
        }
      };
      return Upload.upload(options);
    };

      createWithAttachment = function(formData) {
        sendPayload(formData, "POST", "https://myapi.com/my_resources.json");
      };
      editWithAttachment = function(formData, recordId) {
        sendPayload(formData, "PUT", '/posts/'+recordId+'.json');
      };

  }]);