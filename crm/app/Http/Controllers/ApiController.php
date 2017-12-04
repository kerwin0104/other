<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ApiController extends BaseController
{
  protected function success ($data) {
    $result = [];
    $result['err'] = 0;
    $result['msg'] = 'success';
    $result['data'] = $data;
    return $result;
  }

  protected function fail ($errMsg = 'failed', $errCode = 1000, $data = null) {
    $result = [];
    $result['err'] = $errCode;
    $result['msg'] = $errMsg;
    $result['data'] = $data;
    return json_encode($result);
  }
}
