[![Build Status](https://travis-ci.org/fjfernandez93/ProyectoIV.svg?branch=master)](https://travis-ci.org/fjfernandez93/ProyectoIV)

# Proyecto IV 2016-2017: fifator

Organizador de torneos personalizados de videojuegos de futbol.
El sistema tendrá dos funcionalidades principales:
- Por un lado, creará torneos personalizados en juegoso como el FIFA o el PES. Se le indica que usuarios van a jugar, que tipo de torneo se quiere y unas reglas básicas, y el sistema se encarga de organizar los partidos, mostrando que encuentro toca, como va la clasificació, etc. Cuando acabe un partido, un usuario administrador del torneo tendrá que introducir en el sistema el resultado.

- Por otro lado, el sistema lleavará un registro de toda la actividad para relacionar usuarios y facilitar la visualización de estadísticas e historiales.

La idea es hacer principalmente el back-end (aunque sea una versión con poca funcionalidad) que se encargue de toda la lógica del sistema y envíe la información a los front-end o aplicaciónes que se encarguen de presentarla al usuario e interactuar con él.

## Despliegue

Este proyecto está desarrolado en Node.js, y utiliza un esquema de base de datos en PostgreSQL. Para su despliegue, es necesario:

- Para obtener los fuentes del proyecto, solo es necesario clonar este repositorio.

- Establecer en la plataforma que se vaya a desplegar las variables de entorno 'DBDATA' que contenga la url de la BD de datos donde se vaya a desplegar el esquema; y la variable de entorno 'CONNECT_WITH_SSL' con valor "OK" si el servidor donde alojaremos la BD necesita conexión por SSL.

- Una vez clonado y establecidas las variables de entorno, ejecutar (en la raiz del proyecto):

```bash
node models/database.js
```
Este script crea el esquema de la base de datos creando las tablas necesarias.

- Por último, para levantar el servicio web ejecutar:

```bash
./bin/www
```

Y la aplicación será accesible en la url de la máquina en la que se ha hecho el despliegue, en el puerto 3000.

- Para pasar los test, se puede ejecutar el comando "mocha" en la raiz del proyecto, o bien intregarlo en Travis, ya hay definido un archivo de configuración para esta plataforma de Integración Continua.


Como sugerencia de despliegue, se recomienda por su facilidad el PaaS "Heroku". Para ver los pasos necesrios, consultar [aquí](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/hito3.md).

La aplicación, una vez desplegada en Heroku puede accederse desde su URL:
https://arcane-oasis-51879.herokuapp.com

Heroku también nos ofrece la posibilidad de desplegar la aplicación con los cambios que vayamos haciendo mediante push al repositorio en GitHub (para ver como hacer esto consultar el enlace de documentación anterior).

## Docker

Este proyecto puede ser desplegado en un entorno de pruebas mediante contenedores Docker. El contenedor Docker que incluye la aplicación se puede generar a través de [Dockerfile](https://github.com/fjfernandez93/ProyectoIV/blob/master/Dockerfile) que viene incluido en el proyecto, o a través de Dockerhub. La base de datos que utiliza la aplicación estará contenida en otro contendor Docker. Para poder montar el entorno de pruebas con contenedores:

###### Si se quiere a través del Dockerfile:

En un directorio aparte, descargamos [este Dockerfile](https://gist.github.com/fjfernandez93/e974959b7d36acf7b47b772833b1c389) (obtenido de la documentación oficial de Docker y modificado el nombre de la BD) y ejecutamos:

```bash
docker build -t postgretest .
docker run --rm -P --name pg_test postgretest
```
Con esto tenemos en ejecución un contenedor con la BD postgreSQL que utilizará la aplicación.

Ahora, en el mismo directorio donde se encuentre el Dockerfile de la aplicación fifator:

```bash
docker build -t fifatortest .
docker run --rm -p 30000:3000 --link pg_test:pg_test fifatortest
```

Esto ejecuta automaticamente la aplicación, y podemos acceder a ella desde 'localhost:30000' (el puerto puede modificarse en el comando anterior)

Si en vez de que se ejecute directamente, queremos iniciar una terminal interactiva en el contenedor de la aplicación:

```bash
docker run --rm -p 30000:3000 -t -i --link pg_test:pg_test fifatortest /bin/bash
```

###### Si se quiere a través del DockerHub:

El contendor se encuentra disponible en [DockerHub](https://hub.docker.com/r/fjfernandez93/proyectoiv/). Para utilizarlo, hay que sustituir el comando en el que se hace 'build' con el Dockerfile por:
```bash
docker pull fjfernandez93/proyectoiv
```

Para más información sobre los Dockerfile o los comandos, visitar [este](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/hito4.md) enlance.



## Licencia

Este proyecto está desarrollado bajo la licencia GNU General Public License v3.0, la cual permite (entre otras cosas) el uso comercial, la distribución, la modificación, garantías de patente en contribuciones y el uso privado del proyecto.

Las principales condiciones para que esto sea posible son que el código fuente de los proyectos derivados de este sea público; utilizar la misma licencia e incluir una copia de ésta en el proyecto; e indicar los cambios realizados al código.

Una copia completa de la licencia se encuentra disponible en este repositorio.
