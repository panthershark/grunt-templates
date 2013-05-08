var Handlebars = require('broadway-handlebars'),
    broadway = require('broadway');

module.exports = function(grunt) {

  // Create a new task.
  grunt.registerMultiTask('grunt-templates', 'Export templates to requirejs module as a hash', function() {
    var options = this.data,
        done = this.async(),
        app = new broadway.App();

    grunt.log.write(JSON.stringify(this.data));

    app.use(new Handlebars(), options.viewResolver);

    app.templates(function(err, templates) {
      var script = 'require([], function() { return ' + JSON.stringify(templates, null, 2) + ';})';
      grunt.file.write(options.output, script);
      done();
    });
  });
}