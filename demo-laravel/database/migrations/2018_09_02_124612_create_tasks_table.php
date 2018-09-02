<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTasksTable extends Migration {

	public function up()
	{
		Schema::create('tasks', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('title');
			$table->text('description')->nullable();
			$table->integer('previous_task_id')->unsigned()->nullable();
			$table->integer('next_task_id')->unsigned()->nullable();
			$table->integer('project_id')->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('tasks');
	}
}