module.exports = function(grunt){
  grunt.initConfig({
    pkg :   grunt.file.readJSON('package.json'),
    mochaTest:  {
      test: {
        options: {
          ui: 'tdd',
          reported: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['test/**/*.js']
      }
    }
  });

  /* LOAD MODULES */
  grunt.loadNpmTasks('grunt-mocha-test');

  /* REGISTER TASKS */
  grunt.registerTask('default',[]);
  grunt.registerTask('test', ['mochaTest']);

};
