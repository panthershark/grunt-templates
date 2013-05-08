module.exports = function(grunt) {

  grunt.initConfig({


    'grunt-templates': {
      task1: {
        viewResolver: {
          view: {
            base: ["./fixtures/views1", "./fixtures/views2"]
          }
        },
        output: './output/templates.js'
      },
      task2: {
        viewResolver: {
          view: {
            base: ["./fixtures/views1"]
          }
        },
        output: './output/templates2.js'
      }
    }


  });

  grunt.loadTasks("../tasks");
  grunt.registerTask('default', ['grunt-templates']);

};