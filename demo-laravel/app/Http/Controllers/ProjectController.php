<?php

namespace App\Http\Controllers;

use App\Services\ProjectService;
use Danvelcab\LvlAPIGeneratorFramework\Classes\StoreFormRequest;
use Danvelcab\ProjectGenerator\AbstractClasses\AbstractController;
use Danvelcab\ProjectGenerator\Helpers\CodesHelper;

class ProjectController extends AbstractController
{

    protected $service;
    protected $configuration;

    public function __construct()
    {
         //Remove if exist a specific service for this resource
        $this->service = ProjectService::getInstance(); //Remove Project params if exist a specific service for this resource
    }

    public function store(StoreFormRequest $formRequest){
        $response = $this->getModelService()->update($formRequest);
        return response(json_encode($response), CodesHelper::OK_CREATION_CODE);
    }
    public function update(StoreFormRequest $formRequest, $id){
        $response = $this->getModelService()->update($formRequest, $id);
        return response(json_encode($response), CodesHelper::OK_CODE);
    }
    public function delete($id){
        $response = $this->getModelService()->delete($id);
        return response(json_encode($response), CodesHelper::OK_NO_CONTENT);
    }

    protected function getModelService(){
        return $this->service;
    }
}

?>