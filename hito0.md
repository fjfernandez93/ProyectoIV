## Practica 0

#1. Clave ssh

Para poder subir cambios desde mi pc a los repositorios de mi cuenta en GitHub, tengo que generar una clave ssh con este comando:

ssh-keygen -t rsa -C "paco.fernandez.muelas@gmail.com"

y subirla a mi cuenta de GitHub desde la interfaz web:

![img1](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img1.png)

#2. Repositorio proyecto principal, issues y milestone.

Una vez creado el repositorio del proyecto principal (vacio) lo vinculo con una carpeta en mi pc, que será donde trabajaré, con estos comandos:

git init

git remote add origin https://github.com/fjfernandez93/ProyectoIV.git

Y también creo el "milestone" y los "issues".

![img2](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img2.png)

![img3](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img3.png)

#3. Cerrar issues

Para completar los objetivos, voy añadiendo los archivos necesarios que van cerrando issues:

git add .gitignore

git commit -m "close \#1"

git push -u origin master

git add README.md

git commit -m "close \#2"

git push

git add LICENSE

git commit -m "close \#3"

git push


Podemos comprobar como los issues han pasado a "closed" y el milestone está 100% completado.

![img4](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img4.png)

![img5](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img5.png)
