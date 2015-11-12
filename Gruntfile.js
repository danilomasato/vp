module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false,
        // nameCache: '.tmp/grunt-uglify-cache.json',
      },

      my_target : {
        files : {
          'assets/js/vendor.min.js' : ['assets/js/libs/**/*'],
          // 'assets/js/main.js' : ['assets/js/**/*']
        }
      },

      my_target_main : {
        files : {
          'assets/js/main.min.js' : ['assets/js/ctrls/**/*'],
        }
      }
    }, // uglify

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/application.css' : 'assets/css/application.scss'
        }
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'assets/js/**/*',
          'assets/css/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    } // watch


  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );
  grunt.registerTask( 'w', [ 'watch' ] );


};