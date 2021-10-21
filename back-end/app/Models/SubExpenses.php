<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubExpenses extends Model
{
    use HasFactory;
    protected $fillable=['title','currency','amount','start_date','end_date','status','expenses_id'];
    protected $primaryKey='expenses_sub_id';
}
