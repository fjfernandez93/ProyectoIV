# Hito 5: Diseño del soporte virtual para el despliegue de una aplicación

He elegido Azure para el despliegue, por lo tanto antes de nada instalo la CLI:

```bash
npm install azure-cli -g
```
Una vez instalada, puedo hacer login con mis datos de acceso y listar las imágenes  de Ubuntu disponibles para obtener su identificador con:

```bash
azure vm image list | grep Ubuntu
```

Una vez seleccionada la imagen que quiero, paso a crear el fichero [Vagrantfile](https://github.com/fjfernandez93/ProyectoIV/blob/master/Vagrantfile) especificando parámetros como el provider (azure), el box, la ubicación de mi clave ssh o el URN (identificador de la imagen de UbuntuServer). También hay que indicar aquí 4 variables (client_id, tenant_id, client_secret y subscription_id) con IDs de mi cuenta de Azure, que se obtienen desde el portal web. El valor de estas variables lo paso como variable de entorno de Vagrant. Para esto hay que instalar el plugin de Vagrant para variables de entorno:

```bash
vagrant plugin install vagrant-env
```
Y exportar el valor de las variables al archivo .env (logicamente este archivo se ignorará en GitHub).

Además, se indica la ejecución de Ansible. Con la configuración que he puesto ejecutará los playbooks que tengo en el fichero [Ansible](https://github.com/fjfernandez93/ProyectoIV/blob/master/ansible.yml).

En este archivo declaro tareas para actualizar los repositorios de apt-get, instalar Node.js, npm y PostgreSQL, instalar mediante npm Grunt-cli y Forever, crear la BD y definir una variable de entorno. También he definido un archivo de configuración de Ansible para solucionar problemas de conexión de ssh. Además hay que definir la IP privada en un archivo de hosts para ansible (por defecto usa la de /etc/ansible/hosts) y establecer una variable de entorno con la ruta de ese archivo.

Por último, tenemos el archivo [flightplan.js](https://github.com/fjfernandez93/ProyectoIV/blob/master/flightplan.js). Este archivo es utilizado por flightplan para provisionar la máquina. Con él clono el repositorio de la aplicación y la ejecuto con Forever para que se mantenga una ejecución continua.

Una vez hecho podemos ejecutar el despliegue. Para ello instalamos el plugin de Azure para Vagrant con:

```bash
vagrant plugin install vagrant-azure --plugin-version '2.0.0.pre1'
```

Para poder establecer conexiones mediante HTTP tengo que definir una nueva regla en el grupo de seguridad que se ha creado para el recurso en Azure. Estp se hace desde el portal. Elijo el grupo de seguridad correspondiente a la MV que se ha creado, selecciono 'Inbound security rules', pincho en Add y dejo los parámetros necesarios para mi App de Node.js (puerto 3000, Any, Allow). Como se puede ver, viene por defecto una regla para permitir tráfico SSH. Además, añado otra para PostgreSQL (puerto 5432) para poder conectarme a la BD remotamente para temas de depuración.


Cuando acabe de montarse y orquestarse la máquina, lanzo en local flightplan para que se conecte a la MV y ejecute las tareas:

```bash
fly staging
```
Con todo esto, ya podemos acceder a la aplicación:

http://crimson-meadow-38.westeurope.cloudapp.azure.com:3000
