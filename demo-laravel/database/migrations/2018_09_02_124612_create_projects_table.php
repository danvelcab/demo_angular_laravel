<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProjectsTable extends Migration {

	public function up()
	{
		Schema::create('projects', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('title');
			$table->text('description')->nullable();
			$table->integer('status');
			$table->boolean('visible')->default(0);
			$table->date('estimated_start_date')->nullable();
			$table->date('estimated_end_date');
		});
	}

	public function down()
	{
		Schema::drop('projects');
	}
}