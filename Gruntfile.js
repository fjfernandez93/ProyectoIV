'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  docco: {
	  debug: {
  	  src: ['*.js', 'routes/*.js'],
  	  options: {
  		  output: 'docs/'
  	  }
	  }
  },
  bgShell: {
            runNode: {
                cmd: 'npm start',
                bg: false
            }
        }
  });

  // Carga el plugin de grunt para hacer esto
  grunt.loadNpmTasks('grunt-docco');
  grunt.loadNpmTasks('grunt-bg-shell');

  // Tarea por omisión: ejecutar la aplicación
  grunt.registerTask('default', ['bgShell:runNode']);
  // Tarea para generar la documentación
  grunt.registerTask('docco', ['docco']);
};
