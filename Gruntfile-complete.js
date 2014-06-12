'use strict';
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner_name: '/*! <%= pkg.name %> - v<%= pkg.version %> */',

    compass: {
      dev: {
        options: {
          sassDir: 'src/scss/',
          cssDir: 'assets/css/',
          imagesDir: 'assets/images/'
        }
      },

      dist: {
        options: {
          sassDir: 'src/scss/',
          cssDir: 'assets/css/',
          imagesDir: 'assets/images/',
          noLineComments: true
        }
      }
    },

    cssmin: {
      dist: {
        options: {
          banner: '<%= banner_name %>'
        },
        files: {
          'assets/app.min.css': ['assets/css/*.css']
        }
      },
      
    },

    concat: {
      union: {
        options: {
          stripBanners: true,
          banner: '<%= banner_name %>'
        },
        files: {
          'assets/js/app.js': ['src/js/**/*.js'],
        }
      }
     
    },

    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: {
          'assets/app.min.js': 'assets/js/app.js',
        }
      }
    },

    watch: {
      css: {
        files: ['src/scss/{,*/}*.{scss,sass}'],
        tasks: ['compass:dev', 'cssmin']
      },
      js: {
        files: ['Gruntfile.js', 'src/js/**/*.js'],
        tasks: ['concat', 'uglify']
       }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['assets/app.min.css', 'assets/app.min.js', '**/*.html']
        },
        options: {
          watchTask: true,
          host: '127.0.0.1'
        }
      }
    }
  });

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', ['compass:dist', 'cssmin', 'uglify', 'concat']);
}