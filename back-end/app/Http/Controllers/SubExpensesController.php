<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubExpenses;

class SubExpensesController extends Controller
{
    public function storeSubExpense(Request $request){
         $subExpense= new SubExpenses();
         $subExpense->fill($request->all());
         $subExpense->save();
         dd($subExpense);
     }
     public function getSubExpense(){
         return SubExpenses::all();
     }
     public function updateSubExpense(Request $request,$expenses_sub_id){
         $newExpense = SubExpenses::where('expenses_sub_id',$expenses_sub_id)->first();
         $newExpense->update($request->all());
         $newExpense->save();
     }
     public function deleteSubExpense(Request $request,$expenses_sub_id){
         SubExpenses::where('expenses_sub_id',$expenses_sub_id)->delete();
     }
}
