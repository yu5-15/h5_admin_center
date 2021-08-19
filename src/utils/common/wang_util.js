import {spellUrl} from "@/utils/security/util.js"
import {handleAlert,handleCofirm} from "@/utils/common/messageExt.js";
import {MessageBox} from 'element-ui'
import axios from 'axios';

/**
 * api_url:请求地址；
 * reqDataJson：参数；
 * addLabel：需要前端拼接的label
 */
export function loadList(api_url, reqDataJson, addLabel, fun) {
  //加密，返回完整请求地址
  var url = spellUrl(reqDataJson, true, api_url)
  console.info(url);
  //ajax，得到数据
  var json_objet = [];
  //把数据赋值到Data的变量去
  // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
  axios.get(url).then(
    response => {
      const result = response.data;
      var resultCode = result.resultCode;
      var data = result.data;
      json_objet = data;
      if (addLabel.length != 0) {
        json_objet = addLabel.concat(json_objet);
      }
      //    a.concat(b)
      fun(json_objet);
      //  this.value = -100;
      console.log(result)
      console.log("resultCode:" + resultCode);
    }
  ).catch(
    response => {
      alert('请求失败');
    },
  );
}

export function deleteEmptyProperty(object) {
  for (var i in object) {
    var value = object[i];
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        if (value.length == 0) {
          delete object[i];
          console.log('delete Array', i);
          continue;
        }
      }
      deleteEmptyProperty(value);
      if (isEmpty(value)) {
        console.log('isEmpty true', i, value);
        delete object[i];
        console.log('delete a empty object');
      }
    } else {
      if (value === '' || value === null || value === undefined) {
        delete object[i];
        console.log('delete ', i);
      } else {
        console.log('check ', i, value);
      }
    }
  }

  return object;
}

export function isEmpty(object) {
  for (var name in object) {
    return false;
  }
  return true;
}

export function update_all(reqDataJson,apiPath)
{
  //定义业务参数
  //加密，返回完整请求地址
  var url = spellUrl(reqDataJson, true, apiPath)
  console.info(url);
  //把数据赋值到Data的变量去
  // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
  //ajax，得到数据
  axios.get(url).then(
    response => {
      const result = response.data;
      var resultCode = result.resultCode;
      if (resultCode != 1000) {
        alert(result.error)
      } else {
        handleAlert("保存成功","提示",res => {});
      }
    }
  ).catch(
    response => {
      handleAlert("保存失败!","提示",res => {});
    },
  );
}
// deleteEmptyProperty(object) {
//   for (var i in object) {
//     var value = object[i];
//     if (typeof value === 'object') {
//       if (Array.isArray(value)) {
//         if (value.length == 0) {
//           delete object[i];
//           console.log('delete Array', i);
//           continue;
//         }
//       }
//       this.deleteEmptyProperty(value);
//       if (this.isEmpty(value)) {
//         console.log('isEmpty true', i, value);
//         delete object[i];
//         console.log('delete a empty object');
//       }
//     } else {
//       if (value === '' || value === null || value === undefined) {
//         delete object[i];
//         console.log('delete ', i);
//       } else {
//         console.log('check ', i, value);
//       }
//     }
//   }
//   return object;
// },
// isEmpty(object) {
//   for (var name in object) {
//     return false;
//   }
//   return true;
// },


// 使用：
// handleCofirm('确认删除该标签吗？').then(res => {
//     console.log("OK") // cancel
//  }).catch(err => {
//    console.log('err', err) // cancel
//    //
//  })

//  handleAlert("123","333",action => {
//      //回调
//     console.info(1222);
//   })
