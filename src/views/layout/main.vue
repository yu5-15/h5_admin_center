<template>

  <div id="app">
    <!-- 顶部菜单 -->
    <div class="topNav">
      <!-- <div class="topNavLeftBox"> -->
      <div class="topNavTitleBox">彼岸项目中心后台</div>

      <div class="topNavMenuBox">
        <el-menu :default-active="activeIndex" style="height:40px;margin-left: 20px;" background="#background"
                 background-color="#3997ef" text-color="#ffffff" active-text-color="#ffffff" mode="horizontal">
          <!-- <el-menu-item :index="item.id" v-for="item in loadList">
          <router-link to="/main/sub">{{item.name}}</router-link>
        </el-menu-item> -->


          <el-menu-item v-for="item in loadList" @click="menuClick(item.id)" :key="item.id" :index="item.id">
            <div>{{item.name}}</div>
          </el-menu-item>

          <!--           <el-menu-item  @click="menuClick(1)" index="1">-->
          <!--            <div>人事</div>-->
          <!--          </el-menu-item>-->
          <!--        <el-menu-item  @click="menuClick(2)" index="2">-->
          <!--            <div>人事</div>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index="2">-->
          <!--          <div @click="tt()">人事</div>-->
          <!--        </el-menu-item>-->
          <!--          <el-menu-item index="3">-->
          <!--            <router-link to="/view2">审核</router-link>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index="4">-->
          <!--            <router-link to="/view2">项目</router-link>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index="5">-->
          <!--            <router-link to="/view2">财务</router-link>-->
          <!--          </el-menu-item>-->


        </el-menu>
      </div>
      <div class="topNavOptBox">
        <!-- <el-button @click="loginOut()">退出</el-button> -->

        <el-popover
          placement="bottom"
          width="100"
          trigger="click">
          <!-- <el-table :data="gridData">
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table> -->
          <div class="popBox">
            <div class="popBox_info">aden</div>
            <div class="popBox_line_horizontal"></div>
            <div class="popBox_setting" @click="loginOut()">修改密码</div>
            <div class="popBox_line_horizontal"></div>
            <div class="popBox_logout" @click="loginOut()">退出</div>
          </div>
          <!-- <el-button slot="reference">click 激活</el-button> -->
          <div :class="onclick_personl_falg>0?'personal_title_box_on':'personal_title_box_off'"
               @click="personalClick();" slot="reference">
            <img src="@/assets/logo.png" style="border-radius:25px;" width="20px" height="20px"/>
            <img v-show="onclick_personl_falg<0" src="@/assets/imgs/main_down.png" width="20px"/>
            <img v-show="onclick_personl_falg>0" src="@/assets/imgs/main_up.png" width="20px"/>
          </div>
        </el-popover>

      </div>

      <!-- </div> -->
    </div>
    <router-view :key="menuId1"/>
  </div>
</template>

<script>
  import {spellUrl, checkLogin, checkLoginJump} from "@/utils/security/util.js"
  import axios from 'axios';


  export default {
    name: 'app',
    data() {
      return {
        activeIndex: "29",
        loadList: [],
        menuId1: -1,
        onclick_personl_falg: -1,//是否点击个人图标
        intervalId: 1,

        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2


      }
    },
    mounted() {

      if (!checkLogin()) {
        this.$router.push(
          {
            path: '/login',
          }
        );

        this.getLogin();

        return;
      }

      //初始化页面执行的方法
      //   this.loadList = [
      //     {id: "1", name: "系统管理", url: "系统管理"},
      //   ],
      this.activeIndex = "1";
      // }

    },
    watch: {
      $route() {
        //初始化页面执行的方法
        this.getLogin()

        // this.loadList = [
        //   {id: "1", name: "系统管理", url: "系统管理"},
        // ],
        this.activeIndex = "1";
      },

    },


    methods: {
      // 定时刷新数据函数开始---------------------------   

      // 定时刷新数据函数   
      dataRefreh() {

        // 计时器正在进行中，退出函数     
        if (this.intervalId != null) {

          return;

        }

        // 计时器为空，操作     
        this.intervalId = setInterval(() => {

          console.log("刷新" + new Date());
          //加载数据函数 
          this.initData();
        }, 5000);

      },

      // 停止定时器   
      clear() {

        clearInterval(this.intervalId); //清除计时器     
        this.intervalId = null; //设置为null   
      },
      //定时器执行的方法
      initData() {
        // var reqDataJson = {
        // };
        // //定义接口地址
        // var apiPath = "my_test/list.json";
        // //加密，返回完整请求地址
        // var url = spellUrl(reqDataJson, true, apiPath)
        // console.info(url);
        //
        // //把数据赋值到Data的变量去
        // // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
        // //ajax，得到数据
        // axios.get(url).then(
        //   response => {
        //     const result = response.data;
        //     var resultCode = result.resultCode;
        //     var data = result.data;
        //     console.info(data)
        //     // this.loadList = data;
        //     // if (data.length > 0) {
        //     //   // this.menuClick(data[0].id);
        //     // }
        //   }
        // ).catch(
        //   response => {
        //     // alert('请求失败');
        //   },
        // );
      },


      //定时刷新函数结束-------------------------

      getLogin() {
        // var reqDataJson = {
        // };
        // //定义接口地址
        // var apiPath = "my_test/list.json";
        // //加密，返回完整请求地址
        // var url = spellUrl(reqDataJson, true, apiPath)
        // console.info(url);
        //
        // //把数据赋值到Data的变量去
        // // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
        // //ajax，得到数据
        // axios.get(url).then(
        //   response => {
        //     const result = response.data;
        //     var resultCode = result.resultCode;
        //     if (resultCode == 1006){
        //       this.$router.push(
        //         {
        //           path: '/login',
        //         }
        //       );
        //     }
        //   }
        // ).catch(
        //   response => {
        //     alert('请求失败');
        //   },
        // );

      },

      init() {

        var user = JSON.parse(localStorage.getItem('user'));

        var reqDataJson = {
          user_type: user.user_type
        };
        //定义接口地址
        var apiPath = "employeRefMenuList/menu1_list.json";
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
            var data = result.data;
            this.loadList = data;
            if (data.length > 0) {
              // this.menuClick(data[0].id);
            }
          }
        ).catch(
          response => {
            alert('请求失败');
          },
        );
      },

      // 菜单点击
      menuClick: function (menuId1) {
        // // this.menuId1 = menuId1;
        // localStorage.setItem("project_id", "-100")
        // console.info("菜单点击了" + menuId1);
        // localStorage.setItem('menuId1', menuId1);
        // if (menuId1 == 30) {
        //   console.info("跳转到30");
        //   this.$router.push({path: '/main/project/list'});
        // } else if (menuId1 == 32) {
        //   console.info("跳转到32");
        //   this.$router.push({path: '/main/sub/hr/pass/flow/list'});
        // } else if (menuId1 == 35) {
        //   this.loadList = [];
        //   this.$router.push({path: '/main/sub/sys/user/list'});
        // }
      },

      //退出登陆
      loginOut: function () {
        localStorage.clear();
        this.$router.push(
          {
            path: '/login',
          }
        );
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      personalClick() {
        if (this.onclick_personl_falg < 0) {
          this.onclick_personl_falg = 1;
        } else {
          this.onclick_personl_falg = -1;
        }
      },

      ddTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },

    },
    //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    created() {
      //定时函数
      this.dataRefreh();
      this.getLogin();

    },





    //销毁页面
    destroyed() {

      // 在页面销毁后，清除计时器 
      //  
      this.clear();
    },
  }
</script>

<style>
  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: left; */
    font-size: 13px;
    color: #2c3e50;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-content: center;
    align-items: center; */

    position: absolute;


  }

  .topNav {
    width: 100%;
    height: 40px;
    background: #3997ef;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-content: center; */
    align-items: center;
    box-sizing: border-box;
    min-height: 40px;
    color: #ffffff;


  }


  /* .topNavLeftBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    color: #ffffff;
    font-size: 14px;
  } */
  .topNavTitleBox {
    width: 100px;
    margin-left: 20px;
  }

  .topNavOptBox {
    width: 100px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }

  .topNavMenuBox {
    width: 100%;
    flex: 1;
  }

  /* .mainBox {
    width: 100%;
    height: 100%;
    background: white;


    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

  } */

  .leftNav {
    width: 220px;
    min-width: 220px;
    height: 100%;
    background: #fafafa;
  }

  /* .contentBox {
    width: 100%;
    height: 100%;
    flex: 1;


    display: flex;
    flex-direction: column;

    padding: 20px;
    box-sizing: border-box;
  } */


  /* .topNavLeftBox .el-menu-item.is-active{
    margin-right: 20px;
  } */

  /* 水平菜单样式 */
  .topNavMenuBox .el-menu--horizontal > .el-menu-item {
    height: 40px;
    line-height: 40px;
    margin-right: 10px;
  }

  .topNavMenuBox .el-menu--horizontal > .el-menu-item a {
    text-decoration: none;

  }

  .topNavMenuBox .el-menu--horizontal > .el-menu-item {
    height: 40px;
    line-height: 40px;
  }

  /* 左侧菜单悬停样式 */
  .topNavMenuBox .el-menu-item.is-active {
    background-color: #4fa1ed !important;
    color: #fff;
    /* span {
      color: #fff !important;
    } */
    height: 30px;
    display: flex;
    margin-top: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    border-bottom-color: #69aae7 !important;


  }

  .topNavOptBox > .el-button {
    /* height: 20px; */
    padding: 5px 10px 5px 10px;
    font-size: 12px;
  }

  .personal_title_box_on {
    width: 60px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* box-sizing: border-box; */

    border: 0px;
    border-radius: 5px;
    background: #4fa1ed;
    opacity: 0.8;
    outline: none;

  }

  .personal_title_box_off {
    width: 60px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    outline: none;

  }

  /* 禁止选中 */
  .personal_title_box_on img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .personal_title_box_off img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .popBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .popBox_logout {
    width: 100%;
    cursor: pointer;
  }

  .popBox_line_horizontal {
    width: 100%;
    height: 1px;
    background: #f0f0f0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .popBox_setting {
    width: 100%;
    cursor: pointer;
  }

</style>
