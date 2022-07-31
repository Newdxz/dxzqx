/*
 *
 *
脚本功能：varlens解锁永久会员
*******************************
[rewrite_local]
# > varlens 解锁永久会员
^https?:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body https://raw.githubusercontent.com/Newdxz/dxzqx/main/varlens.js
[mitm] 
hostname = mid.zineapi.com
*
*
*/


var objc = JSON.parse($response.body);
      
    objc = 
{
  "success": true,
  "data": {
    "username": "duxz@varlens",
    "app_name": "varlens",
    "nick": null,
    "email": "",
    "uid": "3lrpvb4zji",
    "status": 0,
    "is_guest": false,
    "is_staff": false,
    "is_admin": false,
    "preferences": null,
    "membership": {
      "role_name": "pro",
      "begin_time": "2022-07-30T04:46:37.461Z",
      "end_time": "2099-07-31T10:55:34Z",
      "begin_time_ms": 1659156397461,
      "end_time_ms": 4089149734000
    },
    "social_apple_id": null,
    "created_datetime": "2021-12-18T05:29:01.076Z",
    "created_datetime_ms": 1639805341076,
    "last_login_datetime": "2022-07-31T02:42:51.402Z",
    "last_login_datetime_ms": 1659235371402
  }
};

$done({body : JSON.stringify(objc)});
