module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      jade: {
        files: ['index.jade'],
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
