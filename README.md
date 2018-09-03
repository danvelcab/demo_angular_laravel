# demo_angular_laravel

## RoadMap

### Laravel:

[x] Integrar Laravel Abstract Class

[ ] Implementar web services del recurso "projects"


### Angular:

[x] Integrar Angular Material Design

[x] Añadir cabecera

[ ] Añadir footer

[x] Añadir menu lateral

[x] Añadir archivos de plantilla de navegación

[ ] Añadir archivos de plantilla de mensaje de alertas

[ ] Añadir archivos de plantilla de conexión con la API

[ ] Añadir página principal

[ ] Añadir página de "projects"

[ ] Añadir tabla (+ filtros, búsqueda, paginación y ordenación)

[ ] Añadir modal y formulario (dinámico) de "projects"

[ ] Añadir vista de detalles de "porjects"

[ ] Añadir borrado de "projects"

[ ] Añadir borrado masivo de "projects"

[ ] Añadir autenticación y resolver y guards de usuario autenticado


//////////////////////////////   //////////////////////////////   ////////////////////////////// 

## Especificaciones

###Laravel:
tabulador: 4 espacios

### Angular:
- Variables y funciones: camelCase (Ej: nuevaVariable)
- constantes y variables globales: UPPERCASE (Ej: NUEVA_CONSTANTES)
- tabulador: 2 espacios (angular CLI trabaja con 2 espacios)
- Dejar espacios entre operadores (+, -, =, etc ...)


//////////////////////////////   //////////////////////////////   //////////////////////////////


## Desarrollo Laravel
### Migrations
Obtenidas de laravelSD: https://laravelsd.com/

### Implementacion WebService (LaravelAbstractClass)
Mirar documentación del paquete: 
https://github.com/ebarriosbloonde/LaravelAbstractClass/tree/feature/v2

## Desarrollo Angular

### Theme
En styles.css: @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

### Icons
En index: <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

### Cabecera y SideBar
Obtenidos a través del comando:
ng generate @angular/material:material-nav --name <component-name>


### NgTemplateModule

#### Navigation
Es un helper que ayuda a la navegación entre las distintas páginas y rutas.
Para poder utilizarlo hay que crear una constante como la que hay en el fichero router-navigation.helper.ts con un array
en el que se indique un nombre o alias de la página y la ruta que corresponda.
