<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

     protected $fillable = ['title','description','currency','amount','recurring','start_date','end_date','type','categories_id'];
    protected $primaryKey = 'income_id';
    
}
