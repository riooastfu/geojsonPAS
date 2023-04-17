<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TitikModel;

use App\Http\Requests;

class TitikController extends Controller
{
    public function __construct()
    {
        $this->TitikModel = new TitikModel();
    }

    public function index()
    {
        return view('home');
    }

    public function dataCUS($blk = '', $thn = '')
    {
        $results = $this->TitikModel->getDataCus($blk, $thn);
        return json_encode($results);
    }
    public function dataCrop($blk = '', $thn = '', $bln = '')
    {
        $results = $this->TitikModel->getCropHarvest($blk, $thn, $bln);
        return json_encode($results);
    }
}
