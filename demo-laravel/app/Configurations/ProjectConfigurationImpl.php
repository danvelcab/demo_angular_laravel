<?php

namespace App\Configurations;

use Danvelcab\ProjectGenerator\FrameworkClasses\IFrameworkConfiguration;

class ProjectConfigurationImpl implements IFrameworkConfiguration
{

    /**
     *  Debe retornar un string con el nombre de la clase Model del recurso
     */
    public function getModelName(){
        /**
         * return 'User';
         */
        return 'App\Project';
    }

    /**
     * Debe retornar un string con el nombre de la tabla del recurso en la base de datos
     */
    public function getTableName(){
        /**
         * return 'users';
         */
        return 'projects';
    }
    /**
     * Debe retornar un string con el nombre de la tabla del recurso en la base de datos pero en singular.
     * Se utiliza para determinar el nombre del atributo de las tablas que contengan una foreign key a la del
     * recurso en cuestión
     */
    public function getSingularTableName(){
        /**
         * return 'user';
         */
        return 'project';
    }
    /**
     * Debe retornar un array (clave, valor), en el que la clave sea el atributo a validar y el valor un string
     * o un array de reglas para dicho atributo
     */
    public function getRules(){
        /**
         * return [
         *      'name'  => 'required|string
         *      'email'  => 'required|unique|mail
         * ]
         */
        return [
            'title' => 'required',
            'description' => 'required',
            'status' => 'required|in:0,1,2',
//            'visible' => 'required|boolean',
            'estimated_start_date' => 'required|date',
            'estimated_end_date'    => 'required|date'
        ];
    }

    /**
     * Debe retornar un array con los atributos que serán guardados automáticamente (tal y como vienen en el $request)
     * en las operaciones de creación y de actualización.
     */
    public function getAutoSaveFields(){
        /**
         * return ['name', 'email']
         */
        return ['title', 'status', 'visible', 'estimated_start_date', 'estimated_end_date'];
    }

    /**
     * Debe retornar un array con los campos que se pueden filtrar en la consulta de listado y de detalles por defecto.
     * Cada elemento del array puede ser o bien un string (indicando el campo), para el cual se utilizará la operación
     * where en el filtro, obien un array clave valor en el que el valor de la clave 'field' es el nombre del campo,
     * y el valor de la clave 'operation' es la operación a realizar en el filtro. En ocasiones puede ser conveniente añadir
     * delante del atributo el nombre de la tablas (en vez de poner name, poner users.name) para que no haya conflicto con otros
     * atributos de tablas con las que se realice un join
     */
    public function getFilters(){
        /**
         * return ['name', 'filter', ['field' => 'status', 'operation' => 'in']
         */
        return ['status', 'visible', ['field' => 'id', 'operator' => 'in']];
    }

    /**
     * Debe retornar un array con los campos sobre los que se puede hacer una búsqueda
     */
    public function getSearchFilters(){
        /**
         * return ['name', 'filter']
         */
        return ['title'];
    }

    /**
     * Debe retornar un array con los campos sobre los que podremos realizar ordenación
     */
    public function getOrders(){
        /**
         * return ['id', 'name', 'filter']
         */
        return ['id', 'title', 'status', 'visible'];
    }

    /**
     * Debe retornar un array de campos sobre los que se va a hacer la selección en las operaciones de listado
     */
    public function getListSelect(){
        /**
         * return ['users.*']
         */
        return ['projects.*'];
    }

    /**
     * Debe retornar un array de campos sobre los que se va a hacer la selección en las operaciones de detalles
     */
    public function getDetailsSelect(){
        /**
         * return ['users.*']
         */
        return ['projects.*'];
    }

    /**
     * Debe retornar un array de campos sobre los que se va a hacer la selección en las operaciones de listado para un selector
     */
    public function getSelectorSelect(){
        /**
         * return ['users.id as id',
         *          'users.name as name']
         */
        return [
            'projects.id as id',
            'projects.name as name'
            ];
    }

    /**
     * Debe retornar un array con los appends que se quieran añadir en la consulta de detalles
     * El campo attr determinará el nombre que debe tener la función en el Helper, que hará la consulta que se adjuntará en el atributo
     * con el nombre indicado en la key 'new_col_name'
     */
    public function getDetailsAppends(){
        /**
         * return [
         *      [
         *          'attr' => 'privileges',
         *          'new_col_name' => 'privileges'
         *      ]
         * ]
         */
        return [];
    }
    /**
     * Debe retornar un array con los appends que se quieran añadir en la consulta de listado
     * El campo attr determinará el nombre que debe tener la función en el Helper, que hará la consulta que se adjuntará en el atributo
     * con el nombre indicado en la key 'new_col_name'
     */
    public function getListAppends(){
        /**
         * return [
         *      [
         *          'attr' => 'privileges',
         *          'new_col_name' => 'privileges'
         *      ]
         * ]
         */
        return [];
    }
    public function getTransformSearchFilters() {
        return [
            'id' => 'projects.id'
        ];
    }
    public function getTransformSearchOrders() {
        return [
            'title' => 'projects.title'
        ];
    }
}