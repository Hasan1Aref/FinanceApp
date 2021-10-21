<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admins;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Exception;
use Illuminate\Support\Facades\File;
class AdminsController extends Controller
{
    private $status_code= 200;
   
   public function storeadmin(Request $request){
    $validation = Validator::make($request->all(),
    [
    'profile_picture'=>'required|mimes:jpeg,jpg,png,gif|max:10000'
    ]);
    
    if ($validation->fails()){
    $response=array('status'=>'error','errors'=>$validation->errors()->toArray()); 
    return response()->json($response);
    }
    if($request->hasFile('profile_picture')){
    
    $uniqueid=uniqid();
    $extension=$request->file('profile_picture')->getClientOriginalExtension();
    
    $name=$uniqueid.'.'.$extension;
    $path=$request->file('profile_picture')->storeAs('public/uploads',$name);
    if($path){
    $admin = new Admins();
    $admin->fill($request->all());
    $admin->profile_picture = $name;
    $admin->save();
    
    return response()->json(array('status'=>'success','message'=>'Image successfully uploaded','image'=>'/storage/uploads/'.$name));
    }else{
    return response()->json(array('status'=>'error','message'=>'failed to upload image'));
    }
    }
    
    
    
   }
    public function getalladmins(){
        return Admins::all();
    }
    public function getadminbyid($admin_id){
        return Admins::where('admin_id',$admin_id)->first();
    }

        public function updateadmin(Request $request, $admin_id){


        $admin = new Admins();
        $admin = tap(Admins::where('admin_id', $admin_id));
        $admin->username = $request->input('username');
        $admin->password = $request->input('password');
        $admin->profile_picture = $request->input('profile_picture');
        error_log($admin->profile_picture );
//Storage::delete('public/uploads/60dbf5f50fd63.png');
        if ($request->hasFile('profile_picture')) {
            $uniqueid = uniqid();
            $extension = $request->file('profile_picture')->getClientOriginalExtension();

            $name = $uniqueid . '.' . $extension;
            $path = $request->file('profile_picture')->storeAs('public/uploads', $name);
            if ($path) {
                $admin->profile_picture = $name;
                $admin->update(['username' => $request->username]);
                $admin->update(['password' => $request->password]);
                $admin->update(['profile_picture' => $admin->profile_picture]);

                return response()->json(array('status' => 'success', 'message' => 'Image successfully uploaded', 'image' => '/public/uploads/' . $name));
            } else {
                return response()->json(array('status' => 'error', 'message' => 'failed to upload image'));
            }

}

        //     if ($request->profile_picture !=="" && $request->profile_picture!==$data->profile_picture) {
        //         $validation = Validator::make($request->all(),[
        //     'profile_picture'=>'required|mimes:jpeg,jpg,png,gif|max:10000'
        // ]);

    //     if ($validation->fails()){
    //         $response=array('status'=>'error','errors'=>$validation->errors()->toArray());  
    //         return response()->json($response);
    //     }
    // if($request->hasFile('profile_picture')){

//         $uniqueid=uniqid();
//         $extension=$request->file('profile_picture')->getClientOriginalExtension();

//         $name=$uniqueid.'.'.$extension;
//         $request->file('profile_picture')->storeAs('public/uploads',$name);


//    if (file_exists(storage_path('app/public/uploads/') . $data->profile_picture)) {
//                     unlink(storage_path('app/public/uploads/') . $data->profile_picture);
//                 }


// $data->update(['profile_picture' => $name]);
            // }
        // }
    }
       



        
    

    
      public function deleteadmin($admin_id){
          
          Admins::where('admin_id',$admin_id)->delete();
    }
    public function adminisexists(Request $request){
        $admin= Admins::where('username',$request->username)->where('password',$request->password)->first();
        if($admin){
return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $admin]);

        }
        else{
               return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email or password doesn't exist."]);

        }
    }
}
