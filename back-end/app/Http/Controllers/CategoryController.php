<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Exception;
class CategoryController extends Controller
{
    public function storecategory(Request $request){
      //  dd($request);
      $admin = new Category();
      $admin->fill($request->all());
      $admin->save();
      dd($admin);

    }
     public function getallcategories(){
        return Category::all();
    }

        public function updatecategories(Request $request,$categories_id){
            $admin = Category::where('categories_id',$categories_id)->first();
            //return $blog;
            $admin->update($request->all());
            $admin->save();
    }
      public function deletecategories($categories_id){
        try{
          Category::where('categories_id',$categories_id)->delete();
return "deleted successfully";
        }
        catch(Exception $e){
return "you cannot delete category please remove all the incomes all expenses related";
        }
    } 
}
