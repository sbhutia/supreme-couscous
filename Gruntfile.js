module.exports = function(grunt){
    const path = require('path');
    
    grunt.initConfig({
      express: {
        server: {
          options: {
            port: 9000,
            bases: path.resolve(__dirname, 'web')
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-express');
    
    grunt.registerTask('default',['express', 'express-keepalive'])
};