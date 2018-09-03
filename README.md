# demo_angular_laravel

## RoadMap

Laravel:
[x] Integrar Laravel Abstract Class
- Implementar web services del recurso "projects"


Angular:
[x] Integrar Angular Material Design
[x] Añadir cabecera
- Añadir footer
[x] Añadir menu lateral
- Añadir página principal
- Añadir página de "projects"
- Añadir tabla (+ filtros, búsqueda, paginación y ordenación)
- Añadir modal y formulario (dinámico) de "projects"
- Añadir vista de detalles de "porjects"
- Añadir borrado de "projects"
- Añadir borrado masivo de "projects"

## Especificaciones

Laravel:
tabulador: 4 espacios

Angular:
- Variables y funciones: camelCase (Ej: nuevaVariable)
- constantes y variables globales: UPPERCASE (Ej: NUEVA_CONSTANTES)
- tabulador: 2 espacios (angular CLI trabaja con 2 espacios)
- Dejar espacios entre operadores (+, -, =, etc ...)


## Laravel
### Migrations
Obtenidas de laravelSD: https://laravelsd.com/


## Angular

### Theme
En styles.css: @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

### Icons
En index: <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

### Cabecera y SideBar
Obtenidos a través del comando:
ng generate @angular/material:material-nav --name <component-name>
