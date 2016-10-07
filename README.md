
# Proyecto IV 2016-2017: fifator

Organizador de torneos personalizados de videojuegos de futbol.
El sistema tendrá dos funcionalidades principales:
- Por un lado, creará torneos personalizados en juegoso como el FIFA o el PES. Se le indica que usuarios van a jugar, que tipo de torneo se quiere y unas reglas básicas, y el sistema se encarga de organizar los partidos, mostrando que encuentro toca, como va la clasificació, etc. Cuando acabe un partido, un usuario administrador del torneo tendrá que introducir en el sistema el resultado.

- Por otro lado, el sistema lleavará un registro de toda la actividad para relacionar usuarios y facilitar la visualización de estadísticas e historiales.

La idea es hacer principalmente el back-end (aunque sea una versión con poca funcionalidad) que se encargue de toda la lógica del sistema y envíe la información a los front-end o aplicaciónes que se encarguen de presentarla al usuario e interactuar con él.

## Tecnología

Voy a intentar hacer una API REST utilizando Node.js y Express que se encargue de la lógica del sistema, es decir, se le hagan peticiones por ejemplo para obtener información sobre los torneos activos de un jugador, ver cual es el siguiente partido en un toreno, etc.

La mayor parte de la información se almacenará en una BD en PostgreSQL, aunque no descarto usar otra tecnología aparte que pueda adecuarse mejor a otro tipo de dato que tenga que almacenar.

La parte de interacción con el usuario se hará desde una interfaz web al principio sencilla (usando el propio Node.js y HTML), puediendo ampliar esto utilizado alguna librería para visualización de estadísticas como D3.js 

El despligue se hará utilizando una máquina virtual en AWS, utilizando parte de sus herramientas.



## Licencia

Este proyecto está desarrollado bajo la licencia GNU General Public License v3.0, la cual permite (entre otras cosas) el uso comercial, la distribución, la modificación, garantías de patente en contribuciones y el uso privado del proyecto.

Las principales condiciones para que esto sea posible son que el código fuente de los proyectos derivados de este sea público; utilizar la misma licencia e incluir una copia de ésta en el proyecto; e indicar los cambios realizados al código.

Una copia completa de la licencia se encuentra disponible en este repositorio.
