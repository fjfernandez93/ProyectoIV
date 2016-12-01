#Utilizo como base una imagen que ya trae Node.js instalado en Debian 8.
FROM node

MAINTAINER Francisco José Fernández Muelas

##Clonar el proyecto en /home e instalar las dependencias (Express, pg-promise, etc)
RUN cd /home && git clone https://github.com/fjfernandez93/ProyectoIV.git &&  npm install

##Definiendo el punto de entrada - crear el modelo de BD y ejecuta la aplicación
CMD  node /home/ProyectoIV/models/database.js && /home/ProyectoIV/bin/www
