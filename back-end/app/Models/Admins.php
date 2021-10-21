<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admins extends Model
{
    use HasFactory;
     protected $fillable = ['username','password','profile_picture'];
    protected $primaryKey = 'admin_id';
}
