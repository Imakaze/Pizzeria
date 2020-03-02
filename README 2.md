**Cómo iniciar un proyecto con GIT

1.- Teniendo Node instalado, creamos la carpeta donde vayamos a tener el proyecto. Podemos crearla desde el escritorio o directamente desde la Consola de Comandos (CMD). En este ejemplo usaremos c:\Ninfas.

Desde el CMD sería algo así:

	cd c:\		//para navegar a la raíz del disco duro
	md Ninfas	//para crear el directorio (md significa Make Dir o Crear Carpeta)
	cd Ninfas 	//para entrar en la carpeta creada

2.- Una vez en la carpeta desde el CMD escribimos:

	git init
	npm init

Entonces nos hará algunas preguntas:

	package name: (pizzeria)		//El nombre del proyecto.
	version: (1.0.0)			//La versión
	description: Ninfas blancas		//Una descripción cualquiera
	entry point: (index.js) server.js	//El archivo de entrada, en nuestro caso pondremos server.js porque vamos a hacer un servidor
	test command:				//Dejar en blanco
	git repository: ()			//Aquí hay que poner la dirección web de nuestro repositorio o el del grupo
	keywords: Ninfas blancas		//Palabras clave para las búsquedas.
	author: Ninfas				//Autor
	license: (ISC) MIT			//Tipo de licencia. Por defecto sale ISC pero nosotros pondremos MIT

Si alguna opción ya está bien podemos pulsa Intro, no necesitamos escribir en todos los campos. Lo más importante es el nombre (package name), el entry point (es como definir una página de inicio), la dirección del Repositorio y la licencia, aunque está bien si rellenas el resto de campos también.

Una vez rellenemos el último campo nos pedirá confirmación. Por defecto sale en YES así que no cambiamos nada y le damos a intro. Si aquí quisiéramos tener en nuestro ordenador un repositorio que ya existe en el CMD escribiríamos "git clone" y se descargaría en la carpeta donde le diésemos la orden.

Veremos que nos ha creado en la carpeta un archivo llamado package.json.

3.- Ahora vamos a instalar el módulo express. Sin dejar el CMD y siempre DENTRO de la MISMA CARPETA escribimos:
	
	npm install express --save
	
Si nos fijamos en el archivo package.json ahora debería mostrar Express como dependencia de este modo:

  		"dependencies": {
		    "express": "^4.17.1"

4.- Ahora tenemos que crear el archivo "server.js". Abrimos el bloc de nota y pegamos esto:

	var express = require('express');
	var app = express();

	app.get('/', function (req, res) {
 	 res.send('¡Ninfas Blancas!');
	});

	app.listen(3000, function () {
 	 console.log('Example app listening on port 3000!');
	});

	5.- Guardamos el archivo como tipo "Todos los archivos" con el nombre "server.js".

	6.- Para comprobar que va bien ponemos en la consola:
	
	node server.js

Y en nuestro navegador escribimos  la siguiente dirección:

	localhost:3000

Si nos sale el mensaje que establecimos cuando creamos el archivo "server.js" (que en nuestro caso es "¡Ninfas Blancas!"), significa que todo ha ido bien.
