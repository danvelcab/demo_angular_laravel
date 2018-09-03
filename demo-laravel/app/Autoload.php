<?php
/**
 * Created by PhpStorm.
 * User: Daniel
 * Date: 14/04/2018
 * Time: 13:18
 */

namespace App;


class Autoload
{
    const CLASSES = [
        'project' => 'App\Configurations\ProjectImpl',
//        'type' => 'App\LvlNgImplementations\TypeImpl',
//        'cloth' => 'App\LvlNgImplementations\ClothImpl'
    ];

    const NAMESPACE = 'App\\';
    const ROUTE = 'app/';

    /**
     * @return array
     */
    public static function getClasses()
    {
        return self::CLASSES;
    }

    public static function getClass($resource){
        return self::CLASSES[$resource];
    }

}