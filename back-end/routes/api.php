<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//! profit crud
Route::post('/createprofit',[\App\Http\Controllers\ProfitController::class,'storeprofit']);
Route::get('/getallprofits',[\App\Http\Controllers\ProfitController::class,'getallprofits']);
Route::get('/getresult',[\App\Http\Controllers\ProfitController::class,'getresult']);
Route::put('/updateprofit',[\App\Http\Controllers\ProfitController::class,'updateprofit']);
Route::delete('/deleteprofit',[\App\Http\Controllers\ProfitController::class,'deleteprofit']);

//! admin crud

Route::post('/createadmin',[\App\Http\Controllers\AdminsController::class,'storeadmin']);
Route::post('/adminisexists',[\App\Http\Controllers\AdminsController::class,'adminisexists']);
Route::get('/getalladmins',[\App\Http\Controllers\AdminsController::class,'getalladmins']);
Route::get('/getadminbyid/{admin_id}',[\App\Http\Controllers\AdminsController::class,'getadminbyid']);
Route::post('/updateadmin/{admin_id}',[\App\Http\Controllers\AdminsController::class,'updateadmin']);
Route::delete('/deleteadmin/{admin_id}',[\App\Http\Controllers\AdminsController::class,'deleteadmin']);

//! category crud

Route::post('/creatcategory',[\App\Http\Controllers\CategoryController::class,'storecategory']);
Route::get('/getallcategories',[\App\Http\Controllers\CategoryController::class,'getallcategories']);
Route::put('/updatecategories/{categories_id}',[\App\Http\Controllers\CategoryController::class,'updatecategories']);
Route::delete('/deletecategories/{categories_id}',[\App\Http\Controllers\CategoryController::class,'deletecategories']);

//! income crud

Route::post('/creatincome',[\App\Http\Controllers\IncomeController::class,'storeincome']);
Route::get('/getallincomes',[\App\Http\Controllers\IncomeController::class,'getallincomes']);
Route::get('/getallfixedincomes', [\App\Http\Controllers\IncomeController::class, 'getallfixedincomes']);
Route::get('/getallincomesjoincategory',[\App\Http\Controllers\IncomeController::class,'getallincomesjoincategory']);
Route::put('/updateincome/{income_id}',[\App\Http\Controllers\IncomeController::class,'updateincome']);
Route::delete('/deleteincome/{income_id}',[\App\Http\Controllers\IncomeController::class,'deleteincome']);

//! expenses crud 

Route::post('/createxpenses',[\App\Http\Controllers\ExpensesController::class,'storeexpense']);
Route::get('/getallexpenses',[\App\Http\Controllers\ExpensesController::class,'getallexpenses']);
Route::get('/getallfixedexpenses', [\App\Http\Controllers\ExpensesController::class, 'getallfixedexpenses']);
Route::get('/getexpensesbyid/{expenses_id}', [\App\Http\Controllers\ExpensesController::class, 'getexpensesbyid']);
Route::get('/getallexpensesjoincategory',[\App\Http\Controllers\ExpensesController::class,'getallexpensesjoincategory']);
Route::put('/updateexpenses/{expenses_id}',[\App\Http\Controllers\ExpensesController::class,'updateexpense']);
Route::delete('/deleteexpenses/{expenses_id}',[\App\Http\Controllers\ExpensesController::class,'deleteexpense']);

//! income_sub crud
Route::post('/createincomesubs',[\App\Http\Controllers\IncomeSubController::class,'createincomesubs']);
Route::get('/getallincomessub',[\App\Http\Controllers\IncomeSubController::class,'getallincomessub']);
Route::put('/updateincomesub/{incomesubs_id}',[\App\Http\Controllers\IncomeSubController::class,'updateincomesub']);
Route::delete('/deleteincomesub/{incomesubs_id}',[\App\Http\Controllers\IncomeSubController::class,'deleteincomesub']);

//! Sub expenses crud
Route::post('/createSubExpense',[\App\Http\Controllers\SubExpensesController::class,'storeSubExpense']);
Route::get('/getallSubExpenses',[\App\Http\Controllers\SubExpensesController::class,'getSubExpense']);
Route::put('/updateSubExpense/{expenses_sub_id}',[\App\Http\Controllers\SubExpensesController::class,'updateSubExpense']);
Route::delete('/deleteSubExpense/{expenses_sub_id}',[\App\Http\Controllers\SubExpensesController::class,'deleteSubExpense']);
