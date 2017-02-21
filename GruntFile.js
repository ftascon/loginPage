module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'css/master.css': 'scss/master.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: 'scss/*.scss',
        tasks: ['sass'],
        options: {
          interrupt: true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
