var tap = require('tap'),
    test = tap.test,
    grunt = require('grunt'),
    fs = require('fs'),
    outFile = './output/templates.js';

// remove old output file.
fs.unlink('./output');


test('Test template compilation', function(t) {

  grunt.util.spawn({
    cmd: "grunt",
    args: ["--config", "test/grunt.js", "grunt-requirejs-templates"]
  }, function(err, result) {

    t.notOk(err, 'Should not return error');
    t.ok(fs.existsSync(outFile), 'Output file should exist.');
    t.end();
  });  

});