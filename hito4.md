# Hito 4: Creación de un entorno de pruebas para la aplicación usando contenedores

El comando princpial para el despliegue este este:

```bash
docker run --rm -p 30000:3000 --link pg_test:pg_test fifatortest
```

Con -rm le decimos a docker que elimine el contenedor después de que se le haga "stop".

Con -p 30000:3000 'bindeamos' el puerto 3000 del contenedor al puerto 30000 del localhost. En vez del 30000, podría ponerse cualquier otro que no se esté usando, o utilizar -P para que Docker lo asigne automaticamente.

Con --link pg_test:pg_test estamos 'enlazando' este contenedor con el contenedor cuya etiqueta es 'pg_test'. Este contenedor es el que contiene la BD, y previamente lo hemos desplegado con

```bash
docker run --rm -P --name pg_test postgretest
```
Podemos poner cualquier nombre en vez de pg_test.

La aplicacion se despliegua automaticamente cuando ejecutamos run porque en el archivo Dockerfile he indicado con la etiqueta CMD que se ejecuten los comandos de creación del modelo de BD y el necesario para levantar la aplicación cada vez que se inicie el contenedor. Si no queremos que se haga de forma automática, con el comando:

```bash
docker run --rm -p 30000:3000 -t -i --link pg_test:pg_test fifatortest /bin/bash
```

decimos que inicie una terminal interactiva (-t -i) tipo 'bash'.
