module.exports = function(grunt) {
 
  // Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');
 
  grunt.initConfig({
    // Configure a mochaTest task 
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
//          captureFile: 'results.txt', // Capture the reporter output to a file 
        },
        src: ['Test/Test.js']
      }
    }
  });
 
  grunt.registerTask('default', 'mochaTest');
 
};