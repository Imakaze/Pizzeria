#Cómo instalar REDIS y .NODE


#INSTALAR NODE

1.-Descargar NODE desde su página oficial. Será la última versión actual 12.16.0 para tener todos el mismo:

https://nodejs.org/dist/v12.16.0/node-v12.16.0-x64.msi

El proceso de instalación es sencillo pero hay que fijarse y no instalar Chocolatery cuando nos pida si lo queremos. Viene por defecto desmarcado así que dadle todo el rato a siguiente y ya está.

2.-Para verificar la instalación abriremos la consola de comandos. Yo recomiendo usar el atajo tecla windows+R y en la ventana que os saldrá poner CMD y darle a intro, es lo más rápido.

Entonces en consola pondremos esto:

	node --version

Y debería decir que se está usando la versión 12.16.0, en cuyo caso está todo correcto.



#INSTALAR REDIS

1.- Descargar REDIS desde el NPM. Vamos al CMD y tecleamos lo siguiente:

	npm -g install redis

NPM es el Node Package Manager que instalamos anteriormente. Cuando le deis empezará a descargarlo e instalarlo.
