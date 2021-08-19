<template>
  <!-- <div>
    <button @click="tt()">
      人事登陆
    </button>
    <button @click="tt1()">
      项目登陆
    </button>
  </div> -->
  <div class="loginMainBox">
    <div class="topBox">
        <img src="@/assets/logo.png" width="30px" height="30px" />
    </div>
    <div class="line"></div>
    <div class="contentBox">
      <div class="contentLeftBox">
        <div class="contentTBox">
          <span class="contentT1">彼岸项目</span>
          <span class="contentT2">一站式彼岸项目管理平台</span>
          <span class="contentT3">平台描述平台描述平台描述平台描述平台描述平台描述平台描述平台描述平台描述平台描述平台描述平台描述</span>
          <!-- <span class="contentT3">用户登录</span> -->
        </div>
      </div>
      <div class="contentRightBox">
        <div class="loginBox">
            <div class="loginT1">登陆</div>
            <div class="loginLine"></div>
            <div class="loginInputBox">
              <div class="loginTitle">用户名</div>
              <el-input v-model="user_mobile" maxlength="11" class="loginImput" placeholder="请输入内容"></el-input>
              <div class="loginTitle">密码</div>
              <el-input @keyup.enter.native="tt()" v-model="user_password" class="loginImput" show-password  maxlength="6" placeholder="请输入内容"></el-input>

              <el-button type="primary" @click="tt()">登陆</el-button>

            </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {spellUrl} from "@/utils/security/util.js"
  import axios from 'axios';

  export default {
    name: 'login',

    data() {
      return {
        user_mobile: '',
        user_password: '',
      }
    },

    beforeCreate() {
      //第一个生命周期函数，实例未创建即执行，不能操作data与methods
    },
    created() {
      //最早能操作data与methods的方法
    },
    beforeMount() {
      //页面在内存中编辑完成，js内容尚未渲染到页面
    },
    mounted() {
      //内存中的模板已经挂载到页面中，页面渲染完成。
      console.info("123");
    },
    methods: {
      tt: function () {
        if (this.user_mobile.length < 1){
          return alert("请输入正确的用户名");
        }
        if (this.user_password.length < 1){
          return alert("请输入正确的验证码");
        }

        // const user = { name: 'aa', id: '1001',anycode:"1234532ASD" };
        // localStorage.setItem('user', JSON.stringify(user));

        // var data1 = JSON.parse(localStorage.getItem('user'));
        // console.info(data1);
        // console.info(data1.id);

        //删除某个
        //localStorage.removeItem('hou');
        //删除所有
        //localStorage.clear();


        //定义业务参数
        var reqDataJson = {'name': this.user_mobile, "password": this.user_password};
        //定义接口地址
        var apiPath = "sys/user/loadByName.json"
        //加密，返回完整请求地址
        var url = spellUrl(reqDataJson, false, apiPath)
        console.info(url);
        //ajax，得到数据
        axios.get(url).then(
          response => {
            const result = response.data;
            var resultCode = result.resultCode;
            var data = result.data;
            if (resultCode == 1000) {
              // data.user_type = 1;
              localStorage.setItem('user', JSON.stringify(data));
              this.$router.push(
                {
                  path: '/main/sub/sys/user/list',
                  // query: {"menuId1": menuId1},
                }
              );
            }
          }
        ).catch(
          response => {
            alert('请求失败');
          },
        );


      },
      tt1: function () {

        // const user = { name: 'aa', id: '1001',anycode:"1234532ASD" };
        // localStorage.setItem('user', JSON.stringify(user));

        // var data1 = JSON.parse(localStorage.getItem('user'));
        // console.info(data1);
        // console.info(data1.id);

        //删除某个
        //localStorage.removeItem('hou');
        //删除所有
        //localStorage.clear();


        //定义业务参数
        var reqDataJson = {'mobile': "15200000001", "verify_code": "1001"};
        //定义接口地址
        var apiPath = "sys/user/new_loadByName.json"
        //加密，返回完整请求地址
        var url = spellUrl(reqDataJson, false, apiPath)
        console.info(url);
        //ajax，得到数据
        axios.get(url).then(
          response => {
            const result = response.data;
            var resultCode = result.resultCode;
            var data = result.data;
            if (resultCode == 1000) {
              data.user_type = 2;
              localStorage.setItem('user', JSON.stringify(data));
              this.$router.push(
                {
                  path: '/main',
                  // query: {"menuId1": menuId1},
                }
              );
            }
          }
        ).catch(
          response => {
            alert('请求失败');
          },
        );


      }
    }
  }

</script>

<style>
.loginMainBox{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-content: center; */
  align-items: center;
  box-sizing: border-box;

}

.topBox{
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.line{
  width: 100%;
  height: 1px;
  background: #e7e7e7;
}
.loginMainBox .contentBox{
  width: 100%;
  height: 100%;
  flex: 1;
  max-width: 950px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  margin-top: 80px;
}
.contentLeftBox{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* align-content: center; */
  box-sizing: border-box;
  padding-right: 20px;
}
.contentTBox{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-content: center; */
  align-items: flex-start;
  box-sizing: border-box;

}
.contentT1{
  font-size: 28px;
  color: #000000;

}
.contentT2{
  font-size: 20px;
  color: #000000;
  margin-top: 20px;
}
.contentT3{
  font-size: 16px;
  color: #888888;
  margin-top: 20px;
}


.contentRightBox{
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-content: center; */
  align-items: flex-start;
  box-sizing: border-box;
}

.loginBox{

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  align-items: flex-start;
  box-sizing: border-box;

  max-width: 380px;
  min-width: 380px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
}
.loginT1{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
  box-sizing: border-box;
  font-size: 20px;
  height: 40px;
}
.loginLine{
  width: 100%;
  height: 2px;
  background: #3997ef;
}
.loginInputBox{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
}
.loginTitle{
  font-size: 14px;
  color: #000000;
  margin-top: 10px;
}
.loginMainBox .el-input__inner
{
  width: 100%;
  margin-top: 10px;
  height: 35px;
}
.loginMainBox .el-button--primary{
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
}

.loginMainBox .el-button{
  padding: 0;
  height: 35px;
}

</style>
