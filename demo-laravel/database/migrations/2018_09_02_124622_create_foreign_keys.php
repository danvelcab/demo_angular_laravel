<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('tasks', function(Blueprint $table) {
			$table->foreign('previous_task_id')->references('id')->on('tasks')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('tasks', function(Blueprint $table) {
			$table->foreign('next_task_id')->references('id')->on('tasks')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('tasks', function(Blueprint $table) {
			$table->foreign('project_id')->references('id')->on('projects')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
		Schema::table('histories', function(Blueprint $table) {
			$table->foreign('task_id')->references('id')->on('tasks')
						->onDelete('restrict')
						->onUpdate('restrict');
		});
	}

	public function down()
	{
		Schema::table('tasks', function(Blueprint $table) {
			$table->dropForeign('tasks_previous_task_id_foreign');
		});
		Schema::table('tasks', function(Blueprint $table) {
			$table->dropForeign('tasks_next_task_id_foreign');
		});
		Schema::table('tasks', function(Blueprint $table) {
			$table->dropForeign('tasks_project_id_foreign');
		});
		Schema::table('histories', function(Blueprint $table) {
			$table->dropForeign('histories_task_id_foreign');
		});
	}
}