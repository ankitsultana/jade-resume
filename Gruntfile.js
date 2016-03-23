module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
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
    }
  })
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-sass')
}
