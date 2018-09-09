<?php

namespace App\Http\Requests\Project;

use App\Autoload;
use Danvelcab\ProjectGenerator\AbstractClasses\AbstractStoreFormRequest;
use Danvelcab\ProjectGenerator\Helpers\CodesHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;

class StoreFormRequest extends AbstractStoreFormRequest
{

    public $configuration_impl;

    public function __construct()
    {
        parent::__construct("project");
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();
        $extra_rules = [];
        $rules = array_merge($rules, $extra_rules);
        return $rules;
    }
    public function messages(){
        return parent::messages();
    }

}
