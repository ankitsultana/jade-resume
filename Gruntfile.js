module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  grunt.initConfig({
    express: {
      all: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          bases: [__dirname],
          livereload: true
        }
      }
    },
    watch: {
      all: {
        files: ['index.html', 'includes/css/style.css'],
        options: {
          livereload: true
        }
      },
      jade: {
        files: ['index.jade', 'data.json'],
        tasks: ['jade']
      },
      sass: {
        files: ['includes/sass/style.scss'],
        tasks: ['sass']
      }
    },
    jade: {
      compile: {
        files: {
          'index.html': 'index.jade'
        },
        options: {
          data: function (dest, src) {
            return require('./data.json')
          }
        }
      }
    },
    sass: {
      dist: {
        files: {
          'includes/css/style.css': 'includes/sass/style.scss'
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  })
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ])
}
