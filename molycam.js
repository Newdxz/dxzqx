/*
 *
 *
脚本功能：varlens解锁永久会员
*******************************
[rewrite_local]
# > varlens 解锁永久会员
^https?:\/\/pay\.wecut\.\com\/apple\/iosVerifyReceipt\.php url script-response-body https://raw.githubusercontent.com/Newdxz/dxzqx/main/molycam.js
[mitm] 
hostname = pay.wecut.com
*
*
*/


var objc = JSON.parse($response.body);
      
    objc = 
    {
        "code": 0,
        "msg": "处理成功",
        "data": {
          "isValid": 1,
          "expiresTs": 1800000000
        }
      };

$done({body : JSON.stringify(objc)});