<?php

namespace App\Helpers;

class ProjectHelper
{

    public static function getDto($query_result, $configuration_impl){
        // first groups
        // second appends
        foreach ($configuration_impl->getDetailsAppends() as $details_append){
            $query_result = self::appendToDetails($query_result, $details_append);
        }
        return $query_result;
    }

    public static function listDto($query_result, $configuration_impl){
        foreach ($configuration_impl->getListAppends() as $list_append){
            $query_result = self::appendToList($query_result, $list_append);
        }
        return $query_result;
    }

    public static function appendToDetails($query_result, $details_append){
        $function = $details_append['attr'] . 'DetailsAppend';
        $new_col_name = $details_append['new_col_name'];
        $query_result = self::append($function, $query_result, $new_col_name);
        return $query_result;
    }
    public static function appendToList($query_result, $details_append){
        $function = $details_append['attr'] . 'ListAppend';
        $new_col_name = $details_append['new_col_name'];
        $query_result = self::append($function, $query_result, $new_col_name);
        return $query_result;
    }
    private static function append($function, $query_result, $new_col_name){
        if(function_exists($function)){
            $query_result->$new_col_name = $function($query_result);
        }
        return $query_result;
    }
}