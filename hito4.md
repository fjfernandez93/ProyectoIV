# Hito 4: Creación de un entorno de pruebas para la aplicación usando contenedores


En la documentacion de Docker se indica que hay dos métodos para la creación de nuestra propia imagen:

1. Haciendo un pull de un contenedor ya existente, lo modificamos con comandos y luego hacemos un commit.
2. Generarlo a partir de un Dockerfile.

### Método 1: modificando contenedor.

Como la aplicación está hecha utilizando Node.js, voy a hacer el contenedor sobre el que hay oficial de Node, que está basado en Debian 8.

```bash
sudo docker pull node
```
Una vez descargado, inicio una terminal en el:

```bash
docker run -t -i node /bin/bash
```
Esta imagen ya viene con Node, por lo que ahora tengo que instalar PostgreSQL y los paquetes npm de dependencias.

Antes de nada creo un usuario de nombre 'paco' y lo añado a los usuarios "sudoers" con la orden visudo (previamente habiendo instalado 'nano', ya que la imagen venía sin ningún editor de texto).

Para Postgre:

```bash
sudo apt-get update
sudo apt-get install postgresql-9.4 postgresql-client-9.4
sudo /etc/init.d/postgresql start
```
Para express:

```bash

npm install -g express

```

Para instalar el resto de paquetes que son necensarios, clono el repositorio donde está el proyecto y lo instalo:

```bash
git clone https://github.com/fjfernandez93/ProyectoIV.git
npm install
```
Creo la base de datos:

```bash
psql --command "CREATE USER pake WITH SUPERUSER PASSWORD 'pake';"
createdb -O pake fifa
```
Exporto la variable de entorno:

```bash
export DBDATA="postgres://pake:pake@localhost:5432/fifa"
```
Y ejecuto el script que crea las tablas en la BD

```bash
node models/database.js
```

Con esto ya estaría lista para su ejecución. Para poder "exportarla" hago un commit

```bash
docker commit -m "Docker completo" -a "Paco Fernandez" 7ab192184fc9 pokercio/fifator:v0.1.0
```
Con esto ya tengo el contenedor entre los disponibles:

![img4-1](https://github.com/fjfernandez93/ProyectoIV/blob/documentacion/capturas/img4-1.png)

### Método 2: dockerfile.
