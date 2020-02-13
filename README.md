#Cómo instalar REDIS y .NODE


#INSTALAR NODE

1.-Descargar NODE desde su página oficial. Será la última versión actual 12.16.0 para tener todos el mismo:

https://nodejs.org/dist/v12.16.0/node-v12.16.0-win-x64.zip

El proceso de instalación es sencillo pero hay que fijarse y no instalar Chocolatery cuando nos pida si lo queremos. Viene por defecto desmarcado así que dadle todo el rato a siguiente y ya está.

2.-Para verificar la instalación abriremos la consola de comandos. Yo recomiendo usar el atajo tecla windows+R y en la ventana que os saldrá poner CMD y darle a intro, es lo más rápido.

Entonces en consola pondremos esto:

	node --version

Y debería decir que se está usando la versión 12.16.0, en cuyo caso está todo correcto.



#INSTALAR REDIS

1.- Descargar REDIS desde la página oficial. Ha de ser la última versión, en nuestro caso usaremos la 5.0.7 que aquí os dejo:

http://download.redis.io/releases/redis-5.0.7.tar.gz

2.-Ahora tenemos que descomprimirlo en algún sitio y desde el CMD teclear lo siguiente:
	npm init --yes
	npm -g install redis

NPM es el Node Package Manager que instalamos anteriormente. Cuando le deis empezará a descargarlo e instalarlo.
