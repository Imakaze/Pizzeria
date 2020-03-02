**Cómo instalar .NODE, REDIS, REDILY y POSTMAN


**INSTALAR NODE

1.-Descargar NODE desde su página oficial. Será la última versión actual 12.16.0 para tener todos el mismo:

	https://nodejs.org/dist/v12.16.0/node-v12.16.0-x64.msi/

El proceso de instalación es sencillo pero hay que fijarse y no instalar Chocolatery cuando nos pida si lo queremos. Viene por defecto desmarcado así que dadle todo el rato a siguiente y ya está.

2.-Para verificar la instalación abriremos la consola de comandos. Yo recomiendo usar el atajo tecla windows+R y en la ventana que os saldrá poner CMD y darle a intro, es lo más rápido.

Entonces en consola pondremos esto:

	node --version

Y debería decir que se está usando la versión 12.16.0, en cuyo caso está todo correcto.



**INSTALAR BASE DE DATOS REDIS

1.- Descargar REDIS para Windows:

	https://github.com/MSOpenTech/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.zip
	
2.- Lo descomprimimos en algún lugar, preferiblemente c:\. 

3.- Para arrancar el servidor vamos a la carpeta y hacemos doble click en el archivo "redis-server.exe". Cuando salte el Firewall de Windows hay que aceptar la conexión. Con esa pantalla abierta ya tendremos el servidor corriendo.

4.-Para usar el paquete en NODE instalamos con el NPM. Vamos al CMD y tecleamos lo siguiente:

	npm -g install redis

NPM es el Node Package Manager que instalamos anteriormente. Cuando le deis empezará a descargarlo e instalarlo.

**INSTALAR GESTOR DE REDIS (REDILY)

1.- Descargamos la versión Windows del programa Redily desde su web:

	https://www.redily.app/download/win
	
2.- Instalamos normalmente (si Windows bloquea el archivo le damos a "Más información" y después a "Ejecutar de todas formas".

3.-Una vez instalado abrimos el programa y vamos a File - New Connection. Ponemos el nombre de la conexión y dejamos los datos que hay que són 127.0.0.1 y puerto 6379, que son los que usa Redis. Pulsamos "Test Connection" para ver si funciona y luego a "Add".

4.-Si tenemos el servidor de Redis abierto se conectará enseguida y veremos nuestro servidor.


**INSTALAR POSTMAN

1.- Vamos a su web y descargamos la App:

	https://www.postman.com/
	
2.- Instalamos y ejecutamos.
