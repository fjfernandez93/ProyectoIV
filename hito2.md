# Hito 2: Integración continua

Para describir mi proyecto creao el archivo 'package.json' con el comando npm init. Este comando me va pidiendo datos, y al final genera un archivo descriptor del proyecto. Este archivo incluye, entre otras cosas, la versión de Node.js sobre la que se debe ejecutar y las dependencias.

![img2-1](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img2-1.png)

package.json:

```json

{
  "name": "fifator",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "engines":{"node": "4.6.x || 6.8.x"},
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "docco": "^0.7.0",
    "ejs": "~2.4.1",
    "express": "~4.13.4",
    "grunt": "^1.0.1",
    "grunt-bg-shell": "^2.3.3",
    "morgan": "~1.7.0",
    "pg-promise": "^5.3.5",
    "serve-favicon": "~2.3.0"
  },
  "main": "bin/www",
  "devDependencies": {
    "docco": "^0.7.0",
    "grunt-docco": "^0.5.0"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```
También uso Grunt para automatizar tareas repetitivas. Incialmente, voy a configurar dos herramientas:
- docco: genera la documentación automaticamente con el paquete Docco.
- bgShell (por defecto): ejecuta la aplicación, escuchando en el puerto 3000.

Gruntfile.js:

```js

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
```

Para la integración continua, son necesarios unos test. Yo he creado algunos en Mocha. Estos tests consisten en:
- Un test para cada ruta GET y comprueba que recibe una respuesta correcta.
- Un test para la funcionalidad de añadir torneo. Hace una petición POST indicando el nombre del torneo y un parámetro para indicar que es modo test (para que la aplicación borre el torneo al finalizar). El test comprueba que el torneo se ha creado correctamente si la respuesta es la adecuada.

test.js:

```js
var request = require('supertest');
app = require(__dirname+"/../app.js");


/*Tests para comprobar que las rutas tipo "GET" responden
correctamente*/
describe('GET routes', function() {
  it('responde con html la route: /', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
  it('responde con un json la route: /info/torneos', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con un json la route: /info/equipos', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con un json la route: /info/usuarios', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con html la route: /creatorneo', function(done) {
    request(app)
      .get('/creatorneo')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
/*Este test crea un torneo y comprueba que la respuesta es la correcta.
El parámetro 'testing' indica a la aplicación que ese torneo debe ser
borrado cuando se compruebe que todo esta en orden. */
describe('POST torneo',function(){
  it('Crea torneo correctamente', function(done){
    var torneo = {nombre : 'pedro',testing: 'a'};
    request(app)
      .post('/creatorneo')
      .send(torneo)
      .expect('Content-Type', /html/)
      .expect(200, done);

  });
});
```

![img2-2](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img2-2.png)


Por último, añado el archivo necesario para la integración continua en Travis y añado el repositorio desde la web. Cada push que haga hará que Travis ejecute los test y me reporte si los pasa o no.

travis.yml

```
language: node_js
node_js:
  - "4.6.0"
before_install:
  - npm install -g mocha˚
  - cd . && npm install

script: mocha
```
![img2-3](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img2-3.png)
