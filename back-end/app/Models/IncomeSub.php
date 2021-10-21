<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IncomeSub extends Model
{
    use HasFactory;
    protected $fillable = ['title','currency','amount','start_date','end_date','status','income_id'];
    protected $primaryKey = 'incomesubs_id';

}
