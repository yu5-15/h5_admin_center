import { MessageBox,Message } from 'element-ui'

export function handleCofirm(text = '确定执行此操作吗？',title='提示', type = 'warning') {
  return MessageBox.confirm(text, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: type,
    center: true
  })
}

export function handleAlert(text = '确定执行此操作吗？',title="提示",fun) {
    MessageBox.alert(text,title, {
        confirmButtonText: "确定",
        callback: fun('回调参数哦12345')
      });
  }

export function handleMessage(text = '确定执行此操作吗？',type=1) {
  if(type ===1)
  {
    Message.info(text)
  }
  else if(type ===2) {
    Message.success(text);
  }
  else if(type ===3) {
    Message.warning(text);

  }
  else if(type ===4) {
    Message.error(text)
  }

}



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
