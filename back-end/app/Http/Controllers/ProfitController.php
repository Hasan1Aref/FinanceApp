<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profit;
use App\Models\Income;
use App\Models\Expenses;

class ProfitController extends Controller
{
    public function storeprofit(Request $request)
    {
        //  dd($request);
        $profit = new Profit();
        if (Profit::all()->count() >= 1) {
            return "you already have a profit";
        }
        $profit->fill($request->all());
        $profit->save();
        dd($profit);
    }
    public function getallprofits()
    {
        return Profit::all();
    }

    public function updateprofit(Request $request)
    {
        $profit = Profit::first();
        //return $blog;
        $profit->update($request->all());
        $profit->save();
    }
    public function deleteprofit()
    {
        $profit = Profit::first();
        $profit->delete();
       // Profit::where('profit_id', $profit_id)->delete();
    }
    public function getresult()
    {
        //  $result = Income::select("SELECT COALESCE(SUM(amount), 0) FROM incomes");
        // return $result;
        $sumincome =   Income::get()->sum("amount");
        $sumexpenses =   Expenses::get()->sum("amount");
        $profit = Profit::get('profit_goal');
        $target = $profit[0]->profit_goal;
        //$profit = 15000;
        $result = (($sumincome - $sumexpenses) / $target) * 100;
        return $result;
    }
}
