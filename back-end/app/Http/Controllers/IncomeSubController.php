<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IncomeSub;

class IncomeSubController extends Controller
{
    public function createincomesubs(Request $request){
        //  dd($request);
        $income = new IncomeSub();
        $income->fill($request->all());
        $income->save();
        dd($income);

      }
      public function getallincomessub(){
        return IncomeSub::all();
    }

        public function updateincomesub(Request $request,$incomesubs_id){
            $admin = IncomeSub::where('incomesubs_id',$incomesubs_id)->first();
            //return $blog;
            $admin->update($request->all());
            $admin->save();
    }
      public function deleteincomesub($incomesubs_id){
        IncomeSub::where('incomesubs_id',$incomesubs_id)->delete();
    }
}
