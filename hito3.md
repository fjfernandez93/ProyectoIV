# Hito 3: Despliegue de una aplicación en un PaaS

## Despliegue en PaaS

He elegido Heroku como PaaS para desplegar mi aplicación. Los principales motivos para ello han sido:

- Tras realizar los ejercicios del tema 2 y 3 estoy más familiarizado con el funcionamiento.
- Buen soporte para Node.
- Incluye un plugin que facilita añadir una BD en PostgreSQL.

Para empezar el despliegue, clono el repositorio del proyecto en un directorio de mi ordenador:

![img3-1](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-1.png)

Creo una aplicación de Heroku:

![img3-2](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-2.png)

Añado el plugin para la base de datos:

![img3-3](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-3.png)

Con los siguientes comandos establezco las variables de entorno necesarias:

```bash
git config:set DBDATA='url del servidor donde alojo la BD'

git config:set CONNECT_WITH_SSL='OK'

```
(Este último sólo si el servidor de la BD necesita conexión vía SSL)


Hago push al repositorio de Heroku para que se despliegue de forma automática

![img3-5](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-5.png)

Antes de que empiece a funcionar correctamente, es necesario crear el modelo de base de datos:

![img3-2b](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-2b.png)


A partir de este momento, la aplicación está disponible en https://boiling-oasis-79656.herokuapp.com.

![img3-6](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-6.png)

## Deslpiegue automático desde GitHub

El despligue anterior se ha hecho a través de un fork de mi proyecto, y enlazando este fork a un "remote" de heroku. A través de la interfaz web de Heroku puedo enlazar el despligue de Heroku con el repositorio original de GitHub donde tengo el proyecto. De esta manera, cuando haga cualquier push al repositorio original se activa el despligue con los nuevos cambios (si previamente pasa los test en Travis). Para hacer esto solo hay que seguir este paso:

![img3-7](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-7.png)

Cuyo resultado es:

![img3-8](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3-8.png)

## Problemas encontrados.

Un problema que he tenido con el deslpiegue automático de mi aplicación en Heroku es el plugin para la BD de Postres. Cuando se añade el plugin, crea una BD vacía. Para que el despligue cuente con el esquema de tablas SQL que necesita la aplicación para funcionar, he subido un archivo "dump" con el esquema al servidor de archivos de AWS. Desde el CLI de Heroku puedo hacer un "restore" de este dump indicando su url de AWS. El problema viene cuando el comando que hace "restore", ya que pide confirmación de la operación y para ello hay que escribir el nombre del dyno donde está almacenada la BD. Esto hace que de momento no pueda automatizar totalmente el despligue con un script o con un boton en GitHub tipo "Deploy on Heroku". He puesto la duda el [StackOverflow](http://stackoverflow.com/questions/40513823/how-to-confirm-a-backup-restore-of-postgres-in-heroku), pero de momento no he obtenido respuesta.
