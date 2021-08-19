
 // var root = "http://tian-api-admin-center.other.ren/";
 var root = "http://localhost:8080/api/";
 //const CryptoJS = require('./crypto-js.js');
 const  {CryptoJS} = require('./crypto-js')

// reqDataJson业务数据
// needLogin 是否需要登录
// apiPath api路径
function spellUrl(reqDataJson, needLogin, apiPath) {
  //公用参数
  reqDataJson.expire_time = "";

  if (needLogin) {
    var user = JSON.parse(localStorage.getItem('user'));

    //得到用户数据
    reqDataJson.anycode = user.anycode;
    reqDataJson.user_id = user.user_id;
    reqDataJson.partner_id = user.partner_id;
  }
  else {
    reqDataJson.anycode = "soask_5366.com";
    reqDataJson.user_id = -1;
    reqDataJson.partner_id = -1;

  }

    //隐藏数据填充
    reqDataJson.bak1 = 1;
    reqDataJson.bak2 = 2;
    reqDataJson.bak3 = 3;
    reqDataJson.bak4 = 4;
    reqDataJson.bak5 = 5;

    //转成字符串
  var reqDataStr = JSON.stringify(reqDataJson);
  //加密
  var reqDataEncryptStr = encrypt(reqDataStr);
  //清洗
   var reqDataEncryptStr1 = reqDataEncryptStr.replace(/ /g, "");
   reqDataEncryptStr1 = reqDataEncryptStr1.replace(/\+/g, "#jia#");

  var anyData = "?any=" + encodeURIComponent(encodeURIComponent(reqDataEncryptStr1));


  var url = root + apiPath + anyData;

  //console.log("anyData:" + anyData);

  //console.log(anyData);
  return url;
}

//秘钥key
var key = "djkjiejiHei834$23#@4DdkjkfhjklhenNdiOIDYUElnHDLHDOgdi";
//key不足24位自动以0(最小位数是0)补齐,如果多余24位,则截取前24位,后面多余则舍弃掉
var base64 = CryptoJS.enc.Utf8.parse(key)
//加密使用的是3DES中的ECB,解密对应的使用ECB
function encrypt(data) {
  var encrypt = CryptoJS.TripleDES.encrypt(data, base64, {
        iv: CryptoJS.enc.Utf8.parse('01234567'),//iv偏移量
        mode: CryptoJS.mode.CBC,  //CBC模式
        // mode: CryptoJS.mode.ECB,  //ECB模式
        padding: CryptoJS.pad.Pkcs7//padding处理
      }
  );
  var encryptData = encrypt.toString();//加密完成后，转换成字符串
  return encryptData;
}
//解密
// function decrypt(data) {
//   //var text = document.getElementById("encrypt").innerText;
//   var decrypt = CryptoJS.TripleDES.decrypt(data, base64, {
//         iv: CryptoJS.enc.Utf8.parse('0123456789'),
//         mode: CryptoJS.mode.CBC,
//         // mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7
//       }
//   );
//   //解析数据后转为UTF-8
//   var parseData = decrypt.toString(CryptoJS.enc.Utf8);
//   //  document.getElementById("decrypt").innerText=parseData;
//   return parseData;
// }


function checkLogin()
{
  let user = localStorage.getItem("user");
      if(user ==null || user ==undefined)
      {
        return false;
      }
      else
      {
        return true;
      }
}

function checkRespCode(router,resCode)
{
  if(resCode == 1006)
  {
    //清除静态存储数据
    localStorage.clear();
    //调整到登陆页面
    router.push({path: '/login'});
    //返回false,让主程序别往下执行
    return false;
  }
  return true;
}

function checkLoginJump(router)
{
  var flag = checkLogin();
  if(!flag)
  {
    //调整到登陆页面
    router.push({path: '/login'});
  }
}


export{
  spellUrl,checkLogin,checkLoginJump,checkRespCode
}

