<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Income;
use App\Models\IncomeSub;
use App\Models\Category;
use App\Models\Expenses;
use Exception;
use DateTime;
use DateInterval;
class IncomeController extends Controller
{
    public function storeincome(Request $request){
      //  dd($request);
      $income = new Income();
      $income->fill($request->all());
      $income->save();
        $incomeid = $income->income_id;
        $titlesub = $request->title;
        $subamount = $request->amount;
        $incomesub_currentdata = new DateTime();
        $incomesub_enddata = new DateTime($request->end_date);
        $incomesub_enddataincrement =
        new DateTime();

        $difference =  date_diff($incomesub_currentdata, $incomesub_enddata)->format("%R%a days");
        $loopmonth = (int)round(floor($difference) / 30) * -1;
        $loopweek =
        (int)round(floor($difference) / 7) * -1;

        if ($request->type == "recurring") {
            if ($request->recurring == "monthly") {
                if ($loopmonth > 1 && $loopmonth < 12) {

                    for ($i = 0; $i < $loopmonth; $i++) {
                        $counter = 1;
                        $incomes_sub = new IncomeSub();
                        $incomes_sub->title = $titlesub;
                        $incomes_sub->currency = $request->currency;
                        $incomes_sub->amount = round($subamount / $loopmonth);
                        $incomes_sub->start_date = $incomesub_currentdata;
                        $incomes_sub->end_date = $incomesub_enddataincrement->add(new DateInterval('P' . $counter . 'M'));;
                        $incomes_sub->expenses_id = $incomeid;
                        //$expenses_sub->fill($request->all());
                        $incomes_sub->save();
                        $counter++;
                    }
                }
            }

            if ($request->recurring == "weekly"
            ) {
                if ($loopweek > 1 && $loopweek < 52) {

                    for ($i = 0; $i < $loopweek; $i++) {
                        $counter = 1;
                        $incomes_sub = new IncomeSub();
                        $incomes_sub->title = $titlesub;
                        $incomes_sub->currency = $request->currency;
                        $incomes_sub->amount = round($subamount / $loopweek);
                        $incomes_sub->start_date = $incomesub_currentdata;
                        $incomes_sub->end_date = $incomesub_enddataincrement->add(new DateInterval('P' . $counter . 'W'));
                        $incomes_sub->expenses_id = $incomeid;
                        //$expenses_sub->fill($request->all());
                        $incomes_sub->save();
                        $counter++;
                    }
                }
            }
        }

    }
    public function getallincomes(){
        return Income::all();
    }
    public function getallfixedincomes()
    {
        return Income::where('type', 'fixed')->get();
    }
        public function getallincomesjoincategory(){
        // return Income::join("categories","incomes.categories_id","=","categories.categories_id")
        // ->groupBy('categories.categories_name')
        // ->get(["incomes.*", "categories.categories_name"]);

        $incomes = Income::select(\DB::raw('incomes.*,categories.*, SUM(incomes.amount) as revenue'))
         ->leftJoin('categories', 'categories.categories_id', '=', 'incomes.categories_id')
         ->groupBy('incomes.categories_id')
         ->get();
         return $incomes;
    }
    

        public function updateincome(Request $request,$income_id){
            $admin = Income::where('income_id',$income_id)->first();
            //return $blog;
            $admin->update($request->all());
            $admin->save();
    }
      public function deleteincome($income_id){
        try {
            Income::where('income_id', $income_id)->delete();
            return "deleted successfully";
        } catch (Exception $e) {
            return "you cannot delete expances please remove  all sub expenses related";
        }
          
    }
}
