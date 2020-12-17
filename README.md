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

## Comandos útiles

Creación de componentes sin archivo de test `ng g component <component-name> --skipTests=true`
Creación de servicios sin archivo de test `ng g service <service-name> --skipTests=true`

## Creación de módulos y componentes

Para crear un directorio con su módulo y routing `ng generate module <folder-name> --routing`
Una vez creado el directorio con el módulo y el routing es posible crear componentes dentro del directorio `ng generate component <folder-name>/<component-name> --skipTests=true`

Importante: a la hora de generar este tipo de archivos, es importante que la importación se haga de manera correcta en el `app-routing.module.ts` de tu proyecto. Además ten en cuenta que los componentes en cada directorio que contenga un módulo deben ser importados en el archivo de routing local.

Por ejemplo, aqui te muestro la importación de home.module.ts en el archivo app-routing.module.ts del proyecto:

`````

const routes: Routes = [
  { path: '404', component: Page404Component, data: { title: 'Page 404' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
  { path: 'home', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

`````

Y para importae tu componente `home-page`, debes hacerlo en el archivo `home-routing.module.ts` de esta manera:

`````

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Home Page' } },
];

`````

## Otras observaciones

Para la creación del carrusel se ha hecho uso de la librería  [ngx-owl-carousel-o](https://www.npmjs.com/package/ngx-owl-carousel-o)

El proyecto ha sido creado con las siguientes versiones
    
    Angular CLI: 10.0.8
    Node: 10.16.1
    Angular: 10.0.14

Si deseas conocer más sobre la técnica de Lazy Loading en Angular, te invito a que veas este [video](https://www.youtube.com/watch?v=KI6xyeyMCSo&t=514s)

