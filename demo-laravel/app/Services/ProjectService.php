<?php

namespace App\Services;

use App\Autoload;
use App\Configurations\ProjectConfigurationImpl;
use App\Helpers\ProjectHelper;
use App\Project;
use App\Repositories\ProjectRepository;
use Danvelcab\ProjectGenerator\AbstractClasses\AbstractService;

class ProjectService extends AbstractService
{

    protected $repository;

    private static $__instance = null;

    public $configuration_impl;
    public $model;



    public function __construct()
    {
        $this->configuration_impl = new ProjectConfigurationImpl();
        $this->model = $this->configuration_impl->getModelName();
        $this->repository = ProjectRepository::getInstance(); //Remove  params if exist a specific repository for this resource
    }

    /** This function receive an id and return the venue with the id
     * @param $id
     * @return mixed
     */
    public function get($id){
        $model = $this->repository->get($id);
        return ProjectHelper::getDto($model, $this->configuration_impl);
    }

    /** This function receive an input array and return a venue array
     * @param $input - This parameter contains query params in order to filter and order the db query
     * @return mixed
     */
    public function list($input){
        $paginate = isset($input['page']); //When the list is for a select, the params page isn't send
        $response = $this->repository->getList($input, $paginate);
        $response['elements'] = ProjectHelper::listDto($response['elements'], $this->configuration_impl);
        return $response;
    }

    public function getSelectorList($input){
        $response = $this->repository->getSelectorList($input);
        return $response;
    }

    public function update($request, $id = null){
        $model = $this->model::firstOrNew(['id' => $id]);
        $this->set($request, $model);
        return $this->get($model->id);
    }

    public function delete($id){
        $this->model::where('id', '=', $id)->delete();
        return null;
    }

    public function getFields()
    {
        return $this->configuration_impl->getAutoSaveFields();
    }

    public static function getInstance(){
        if(self::$__instance === null){
            self::$__instance = new ProjectService();
        }
        return self::$__instance;
    }
}