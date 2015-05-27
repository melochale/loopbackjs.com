'use strict';

var gruntConfig = {
  app: 'client/app',
  dist: 'dist',
  client: 'client'
};

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    neble: gruntConfig,

    includeSource: {
      options: {
        basePath: 'client/',
        baseUrl: '',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" href="{filePath}" />'
          }
        }
      },
      dev: {
        files: {
          '<%= neble.app %>/index.html': '<%= neble.app %>/index.tpl.html'
        }
      },
      dist: {
        files: {
          '<%= neble.dist %>/index.html': '<%= neble.app %>/index.tpl.html'
        }
      }

    },

    // Automatically inject Bower components into the app
    wiredep: {
      dev: {
        src: ['<%= neble.app %>/index.html'],
        ignorePath: /\.\.\//
      },
      dist: {
        src: ['<%= neble.dist %>/index.html'],
        ignorePath: ''
      }
    }
  });

  grunt.registerTask('default', [
    'includeSource:dev',
    'wiredep:dev'
  ]);
};
