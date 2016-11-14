[![Build Status](https://travis-ci.org/fjfernandez93/ProyectoIV.svg?branch=master)](https://travis-ci.org/fjfernandez93/ProyectoIV)

# Proyecto IV 2016-2017: fifator

Organizador de torneos personalizados de videojuegos de futbol.
El sistema tendrá dos funcionalidades principales:
- Por un lado, creará torneos personalizados en juegoso como el FIFA o el PES. Se le indica que usuarios van a jugar, que tipo de torneo se quiere y unas reglas básicas, y el sistema se encarga de organizar los partidos, mostrando que encuentro toca, como va la clasificació, etc. Cuando acabe un partido, un usuario administrador del torneo tendrá que introducir en el sistema el resultado.

- Por otro lado, el sistema lleavará un registro de toda la actividad para relacionar usuarios y facilitar la visualización de estadísticas e historiales.

La idea es hacer principalmente el back-end (aunque sea una versión con poca funcionalidad) que se encargue de toda la lógica del sistema y envíe la información a los front-end o aplicaciónes que se encarguen de presentarla al usuario e interactuar con él.

## Despliegue

Para desplegar en Heroku es necesario seguir los siguientes pasos:


```bash
git clone https://github.com/fjfernandez93/ProyectoIV.git
cd ProyectoIV/


heroku addons:create heroku-postgresql:hobby-dev

heroku pg:backups restore 'https://s3.eu-central-1.amazonaws.com/pokerb1/fifator.dump' DATABASE_URL
```
Este útlimo comando nos pedirá confirmación, teniendo que añadir el nombre del dyno para ello.

Por último:

```bash
git push heroku master

heroku open
```
(el último comando es únicamente para que se abra en el navegador el despligue).

## Licencia

Este proyecto está desarrollado bajo la licencia GNU General Public License v3.0, la cual permite (entre otras cosas) el uso comercial, la distribución, la modificación, garantías de patente en contribuciones y el uso privado del proyecto.

Las principales condiciones para que esto sea posible son que el código fuente de los proyectos derivados de este sea público; utilizar la misma licencia e incluir una copia de ésta en el proyecto; e indicar los cambios realizados al código.

Una copia completa de la licencia se encuentra disponible en este repositorio.
