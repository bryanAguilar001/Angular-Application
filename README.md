# Para ejecutar el proyecto

Una vez clonado el proyecto, desde la consola en el directorio del proyecto ejecutar el comando `npm i`
Con este comando se instalarán las librerías y dependencias necesarias

## Notas adicionales

Se han instalado las librerías de Bootstrap, Jquery y Popperjs a partir del siguiente comando
`npm i bootstrap jquery @popperjs/core`

Una vez descargadas las librerías se han importado en el archivo angular.json (el orden de importación de los scripts es importante!)

    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.scss"
	],
	"scripts": [
		"node_modules/jquery/dist/jquery.min.js",
		"node_modules/@popperjs/core/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
	]

## Otras observaciones

El proyecto ha sido creado con las siguientes versiones
    
    Angular CLI: 10.0.8
    Node: 10.16.1
    Angular: 10.0.14