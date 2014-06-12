'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: { /* configuraçao da task */  }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['compass']);
}