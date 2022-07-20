/*
 *
 *
 
[rewrite_local]

# ～ 
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/Newdxz/dxzqx/main/hh.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-echo-response https://raw.githubusercontent.com/Newdxz/dxzqx/main/hh.js

[mitm] 

hostname=api.revenuecat.com

*
*
*/





















var fdb = {
  "request_date": "2022-07-20T05:46:58Z",
  "request_date_ms": 1658296018538,
  "subscriber": {
    "entitlements": {
      "filebox_pro": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "filebox_pro",
        "purchase_date": "2022-06-10T14:46:44Z"
      }
    },
    "first_seen": "2022-06-10T14:40:25Z",
    "last_seen": "2022-07-20T05:45:53Z",
    "management_url": null,
    "non_subscriptions": {
      "filebox_pro": [{
        "id": "08a64bc33a",
        "is_sandbox": false,
        "original_purchase_date": "2022-06-10T14:46:44Z",
        "purchase_date": "2022-06-10T14:46:44Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:bcf9c59eb0d64fc396e6b222039079ed",
    "original_application_version": "134",
    "original_purchase_date": "2022-05-04T15:11:26Z",
    "other_purchases": {
      "filebox_pro": {
        "purchase_date": "2022-06-10T14:46:44Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body : JSON.stringify(fdb)});
