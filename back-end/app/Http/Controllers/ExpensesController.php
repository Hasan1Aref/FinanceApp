<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expenses;
use App\Models\SubExpenses;
use DateTime;
use DateInterval;
use Exception;
class ExpensesController extends Controller
{
  public function storeexpense(Request $request)
  {
    $expenses = new Expenses();
    $expenses->fill($request->all());
    $expenses->save();
    $expensesid = $expenses->expenses_id;
    $titlesub = $request->title;
    $subamount = $request->amount;
    $expensesub_currentdata = new DateTime();
    $expensesub_enddata = new DateTime($request->end_date);
    $expensesub_enddataincrement =
    new DateTime();

    $difference =  date_diff($expensesub_enddata, $expensesub_currentdata)->format("%R%a days");
    $loopmonth = (int)round(floor($difference) / 30) * -1;
    $loopweek =
    (int)round(floor($difference) / 7) * -1;

    if ($request->type == "recurring") {
      if ($request->recurring == "monthly") {
        if ($loopmonth > 1 && $loopmonth < 12) {

          for ($i = 0; $i < $loopmonth; $i++) {
            $counter=1;
            $expenses_sub = new SubExpenses();
            $expenses_sub->title = $titlesub;
            $expenses_sub->currency = $request->currency;
            $expenses_sub->amount = round($subamount / $loopmonth);
            $expenses_sub->start_date = $expensesub_currentdata;
            $expenses_sub->end_date = $expensesub_enddataincrement->add(new DateInterval('P'.$counter.'M'));;
            $expenses_sub->expenses_id = $expensesid;
            //$expenses_sub->fill($request->all());
            $expenses_sub->save();
            $counter++;
          }
        }
      }

      if ($request->recurring == "weekly") {
        if ($loopweek > 1 && $loopweek < 52) {

          for ($i = 0; $i < $loopweek; $i++) {
            $counter = 1;
            $expenses_sub = new SubExpenses();
            $expenses_sub->title = $titlesub;
            $expenses_sub->currency = $request->currency;
            $expenses_sub->amount = round($subamount / $loopweek);
            $expenses_sub->start_date = $expensesub_currentdata;
            $expenses_sub->end_date = $expensesub_enddataincrement->add(new DateInterval('P' . $counter . 'W'));
            $expenses_sub->expenses_id = $expensesid;
            //$expenses_sub->fill($request->all());
            $expenses_sub->save();
            $counter++;
          }
      }
    }
  }
  }
  public function getallexpenses()
  {
    return Expenses::all();
  }
  public function getexpensesbyid($expenses_id)
  {
    return Expenses::where('expenses_id', $expenses_id)->first();
  }
  public function getallfixedexpenses()
  {
    return Expenses::where('type','fixed')->get();
  }
  public function getallexpensesjoincategory()
  {
    // return Income::join("categories","incomes.categories_id","=","categories.categories_id")
    // ->groupBy('categories.categories_name')
    // ->get(["incomes.*", "categories.categories_name"]);

    $expenses = Expenses::select(\DB::raw('expenses.*,categories.*, SUM(expenses.amount) as revenue'))
      ->leftJoin('categories', 'categories.categories_id', '=', 'expenses.categories_id')
      ->groupBy('expenses.categories_id')
      ->get();
    return $expenses;
  }

  public function updateexpense(Request $request, $expenses_id)
  {
    $admin = Expenses::where('expenses_id', $expenses_id)->first();
    //return $blog;
    $admin->update($request->all());
    $admin->save();
  }
  public function deleteexpense($expenses_id)
  {
    try {
      Expenses::where('expenses_id', $expenses_id)->delete();
      return "deleted successfully";
    } catch (Exception $e) {
      return "you cannot delete expances please remove  all sub expenses related";
    }
    
  }
}
