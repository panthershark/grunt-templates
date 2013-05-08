var tap = require('tap'),
    test = tap.test,
    grunt = require('grunt'),
    fs = require('fs'),
    outFiles = ['./output/templates.js', './output/templates2.js'];

// remove old output file.
fs.unlink('./output');


test('Test template compilation', function(t) {

  grunt.util.spawn({
    cmd: "grunt",
    args: ["--config", "test/grunt.js", "grunt-templates"]
  }, function(err, result) {

    t.notOk(err, 'Should not return error');

    outFiles.forEach(function(file) {
      t.ok(fs.existsSync(file), 'Output file should exist.');
    });
    
    t.end();
  });  

});