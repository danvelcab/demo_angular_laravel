<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateHistoriesTable extends Migration {

	public function up()
	{
		Schema::create('histories', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->text('comment');
			$table->integer('task_id')->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('histories');
	}
}