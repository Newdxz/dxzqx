/*
 *
 *
脚本功能：varlens解锁永久会员
*******************************
[rewrite_local]
# > varlens 解锁永久会员
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Newdxz/dxzqx/main/loveDaily.js
[mitm] 
hostname = buy.itunes.apple.com
*
*
*/


var objc = JSON.parse($response.body);
      
    objc = 
    {
      "receipt": {
        "receipt_type": "Production",
        "adam_id": 1135324035,
        "app_item_id": 1135324035,
        "bundle_id": "com.hanchongzan.loverlist",
        "application_version": "1",
        "download_id": 501149130052109056,
        "version_external_identifier": 845681229,
        "receipt_creation_date": "2022-02-15 02:18:32 Etc/GMT",
        "receipt_creation_date_ms": "1644891512000",
        "receipt_creation_date_pst": "2022-02-14 18:18:32 America/Los_Angeles",
        "request_date": "2022-02-15 02:19:24 Etc/GMT",
        "request_date_ms": "1644891564257",
        "request_date_pst": "2022-02-14 18:19:24 America/Los_Angeles",
        "original_purchase_date": "2022-02-15 02:18:16 Etc/GMT",
        "original_purchase_date_ms": "1644891496000",
        "original_purchase_date_pst": "2022-02-14 18:18:16 America/Los_Angeles",
        "original_application_version": "1",
        "in_app": [{
          "quantity": "1",
          "product_id": "com.focoslive",
          "transaction_id": "730000766600650",
          "original_transaction_id": "730000766600650",
          "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
          "purchase_date_ms": "1637860065000",
          "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
          "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
          "original_purchase_date_ms": "1637860068000",
          "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
          "expires_date": "2039-09-09 17:07:45 Etc/GMT",
          "expires_date_ms": "2199191115000",
          "expires_date_pst": "2039-09-09 09:07:45 America/Los_Angeles",
          "web_order_line_item_id": "730000330755327",
          "is_trial_period": "true",
          "is_in_intro_offer_period": "true",
          "in_app_ownership_type": "PURCHASED"
        }]
      },
      "latest_receipt_info": [{
        "quantity": "1",
        "product_id": "com.focoslive",
        "transaction_id": "730000766600650",
        "original_transaction_id": "730000766600650",
        "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
        "purchase_date_ms": "1637860065000",
        "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
        "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT",
        "original_purchase_date_ms": "1637860068000",
        "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
        "expires_date": "2039-09-09 17:07:45 Etc/GMT",
        "expires_date_ms": "2199191115000",
        "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
        "web_order_line_item_id": "730000330755327",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "true",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20902245"
      }],
      "latest_receipt": "",
      "pending_renewal_info": [{
        "auto_renew_product_id": "com.focoslive",
        "product_id": "com.focoslive",
        "original_transaction_id": "730000766600650",
        "auto_renew_status": "1"
      }],
      "status": 0
    }

$done({body : JSON.stringify(objc)});

