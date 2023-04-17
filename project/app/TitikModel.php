<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TitikModel extends Model
{
    public function getDataCus($blk = '', $thn = '')
    {
        $results = DB::table('CropMonthlyBudget')
            ->select()
            ->where('FullBlockCode', $blk)
            ->where('Period', $thn)
            ->get();
        return $results;
    }

    public function getCropHarvest($blk = '', $thn = '', $bln = '')
    {
        $results = DB::table('CropHarvesting')
            ->selectRaw('BlockCode, SUM(KgPanen) as KgPanen')
            ->whereRaw("BlockCode = '" . $blk . "' AND YEAR(Date) = '" . $thn . "' AND MONTH(Date) = '" . $bln . "'")
            ->groupBy('BlockCode')
            ->get();
        return $results;
    }
}
