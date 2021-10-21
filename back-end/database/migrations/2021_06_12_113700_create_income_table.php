<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('profits', function (Blueprint $table) {
            $table->increments('profit_id')->primaryKey;
            $table->double('profit_goal');
            $table->timestamps();
        });


        Schema::create('admins', function (Blueprint $table) {
            $table->increments('admin_id')->primaryKey;
            $table->string('username');
            $table->string('password');
            $table->string('profile_picture')->nullable();
            $table->timestamps();
        });



        Schema::create('categories', function (Blueprint $table) {
            $table->increments('categories_id')->primaryKey;
            $table->string('categories_name');

            $table->timestamps();
        });

        Schema::create('incomes', function (Blueprint $table) {
            $table->increments('income_id')->primaryKey;
            $table->string('title');
            $table->string('description');
            $table->string('currency');
            $table->double('amount');
            $table->string('recurring')->nullable();
            $table->timestamp('start_date')->useCurrent();
            $table->timestamp('end_date')->nullable();
            $table->string('type');
            $table->integer('categories_id')->unsigned();
            $table->timestamps();
            $table->foreign('categories_id')
                ->references('categories_id')
                ->on('categories');
        });
        Schema::create('expenses', function (Blueprint $table) {
            $table->increments('expenses_id')->primaryKey;
            $table->string('title');
            $table->string('description');
            $table->string('currency');
            $table->double('amount');
            $table->string('recurring')->nullable();
            $table->timestamp('start_date')->useCurrent();
            $table->timestamp('end_date')->nullable();
            $table->timestamps();
            $table->string('type');
            $table->integer('categories_id')->unsigned();
            $table->foreign('categories_id')
                ->references('categories_id')
                ->on('categories');
        });

        Schema::create('income_subs', function (Blueprint $table) {
            $table->increments('incomesub_id')->primaryKey;
            $table->string('title');
            $table->string('currency');
            $table->double('amount');
            $table->timestamp('start_date')->useCurrent();
            $table->timestamp('end_date')->nullable();
            $table->string('status');
            $table->integer('income_id')->unsigned();
            $table->timestamps();
            $table->foreign('income_id')
                ->references('income_id')
                ->on('incomes');
        });
        Schema::create('sub_expenses', function (Blueprint $table) {
            $table->increments('expenses_sub_id')->primaryKey;
            $table->string('title');
            $table->string('currency');
            $table->double('amount');
            $table->timestamp('start_date')->useCurrent();
            $table->timestamp('end_date')->nullable();
            $table->string('status');
            $table->integer('expenses_id')->unsigned();
            $table->timestamps();
            $table->foreign('expenses_id')
                ->references('expenses_id')
                ->on('expenses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profits');
        Schema::dropIfExists('admins');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('incomes');
        Schema::dropIfExists('expenses');
        Schema::dropIfExists('income_subs');
        Schema::dropIfExists('sub_expenses');
    }
}
