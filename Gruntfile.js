module.exports = function(grunt) {
 
  // Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');
 
  grunt.initConfig({
    // Configure a mochaTest task 
    mochaTest: {
      API: {
        options: {
          reporter: 'spec'
        },
        src: ['API/Test/**/*.js']
      },
      Site: {
        options: {
          reporter: 'spec'
        },
        src: ['Site/Test/**/*.js']
      }
    }
  });
 
  grunt.registerTask('default', 'mochaTest');
 
};