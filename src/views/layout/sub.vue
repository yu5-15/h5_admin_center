<template>

  <div class="subMainBox">
    <!-- 左侧菜单 -->
    <div class="leftNav">

      <!--      <el-menu-->
      <!--        style="border-right:0;"-->
      <!--        default-active="1"-->
      <!--        class="el-menu-vertical-demo"-->
      <!--        @open="handleOpen"-->
      <!--        @close="handleClose"-->
      <!--        background-color="#fafafa"-->
      <!--        text-color="#888888"-->
      <!--        active-text-color="#3997ef">-->
      <!--        <el-submenu index="1" v-for="">-->
      <!--          <template slot="title">-->
      <!--            <i class="el-icon-location"></i>-->
      <!--            <span>招聘</span>-->
      <!--          </template>-->
      <!--          <el-menu-item-group>-->
      <!--            &lt;!&ndash; <template slot="title">招聘流程申请操作</template> &ndash;&gt;-->
      <!--            <el-menu-item index="1-1" @click="tt()">工作台</el-menu-item>-->
      <!--            <el-menu-item index="1-2">选项2</el-menu-item>-->
      <!--          </el-menu-item-group>-->
      <!--        </el-submenu>-->

      <!--        <el-menu-item index="2">-->
      <!--          <i class="el-icon-menu"></i>-->
      <!--          <span slot="title">导航二</span>-->
      <!--        </el-menu-item>-->

      <!--      </el-menu>      -->

      <el-menu
        style="border-right:0;height:100%;overflow-y:auto;"
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#fafafa"
        text-color="#888888"
        active-text-color="#3997ef">
        <div v-if="menuId_id == 30" v-show="project_id > 0">
          <el-menu-item>
          <span slot="title">{{project_name}}
          </span>
          </el-menu-item>
        </div>
        <div v-for="item in loadMenu" :key="item.id">
          <!-- 有children的布局 -->
          <el-submenu :index=item.id v-if="item.children.length > 0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-if="item.children.length > 0">
              <!-- <template slot="title">招聘流程申请操作</template> -->
              <el-menu-item v-for="c_item in item.children" :index=c_item.id :key="c_item.id"
                            @click="tt(c_item.url,c_item.id)">
                {{c_item.name}}
              </el-menu-item>
              <!--            <el-menu-item index="1-2">选项2</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
          <!-- 没有children的布局 -->
          <el-menu-item :index="item.id" v-if="item.children.length <= 0" @click="tt(item.url,item.id)" :key="item.id">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </div>
      </el-menu>


    </div>
    <!-- 内容区域 -->
    <router-view class="subContentBox"/>

  </div>

</template>

<script>
  import {spellUrl, checkLogin} from "@/utils/security/util.js"
  import axios from 'axios';

  export default {
    name: 'app',
    data() {
      return {
        activeIndex: "4",
        user_type: 1,
        project_id: 1,
        top_ure: "http://localhost:8081/#/",

        project_name: "",
        loadMenu: [],

        loadMenuE: [
          {
            id: "2", name: "首页", url: "首页", children: [],
          }, {
            id: "3", name: "权限管理", url: "权限管理", children: [
              {id: "4", url: "/main/sub/sys/user/list", name: "用户管理"},
              {id: "5", url: "/main/sub/sys/role/list", name: "角色管理"},
            ],
          },
          {
            id: "6", name: "测试用户管理", url: "", children: [
              {id: "101", url: "/main/sub/sys/test/list", name: "测试用户管理"},
            ],
          },
          {
            id: "7", name: "测试彼岸管理", url: "", children: [
              {id: "102", url: "/main/sub/sys/user/list", name: "彼岸管理"},
              {id: "103", url: "/main/sub/sys/user/list", name: "礼物管理"},
            ],
          },
          {
            id: "8", name: "视频管理", url: "", children: [
              {id: "104", url: "/main/sub/sys/user/list", name: "推流"},
              {id: "105", url: "/main/sub/sys/user/list", name: "观看"},
              {id: "106", url: "/main/sub/sys/user/list", name: "点播"},
            ],
          },
          {
            id: "9", name: "榜单管理", url: "", children: [
              {id: "107", url: "/main/sub/sys/user/list", name: "人气主播榜"},
              {id: "108", url: "/main/sub/sys/user/list", name: "豪气达人榜"},
            ],
          },
          {
            id: "10", name: "邀请管理", url: "", children: [
              {id: "109", url: "/main/sub/sys/user/list", name: "邀请管理"},
            ],
          },
          {
            id: "11", name: "主播管理", url: "", children: [
              {id: "110", url: "/main/sub/sys/user/list", name: "主播审核"},
              {id: "111", url: "/main/sub/sys/user/list", name: "主播列表"},
            ],
          },
          {
            id: "12", name: "任务管理", url: "", children: [
              {id: "112", url: "/main/sub/sys/user/list", name: "新手任务管理"},
            ],
          },
          {
            id: "13", name: "财务管理", url: "", children: [
              {id: "113", url: "/main/sub/sys/user/list", name: "财务管理"},
            ],
          },
          {
            id: "14", name: "消息管理", url: "", children: [
              {id: "114", url: "/main/sub/sys/user/list", name: "消息管理"},
            ],
          },
          {
            id: "15", name: "违规举报", url: "", children: [
              {id: "115", url: "/main/sub/sys/user/list", name: "主播举报"},
            ],
          },
          {
            id: "16", name: "系统设置", url: "", children: [
              {id: "116", url: "/main/sub/sys/user/list", name: "系统设置"},
            ],
          },
        ],
        menu1_id: 1,
        menuId_id: 1,
      }
    },
    mounted() {
      // let menuId1 = this.$route.query.menuId1;
      // console.info("传入menuid1：" + menuId1);
      this.menu1_id = localStorage.getItem('menuId1');
      //初始化页面执行的方法
      this.init();
    },
    watch: {
      $route() {
        this.init();//换成你的方法
      }
    },

    methods: {
      init() {
        this.loadMenu = this.loadMenuE;
      },

      tt: function (this_url, id) {
        this.activeIndex = id
        console.info("点击了" + this.activeIndex)
        console.info(this.top_ure + this_url)
        this.$router.push(
          {
            // path: '/main/sub/hr/view3',
            path: this_url,
          }
        );

      },

      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      }
    }
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
    justify-content: space-between;
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


  }

  .topNavLeftBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    color: #ffffff;
    font-size: 14px;
  }

  .subMainBox {
    width: 100%;
    height: 100%;
    background: white;


    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-content: center; */
    /* align-items: center; */
  }

  .leftNav {
    width: 220px;
    min-width: 220px;
    height: 100%;
    background: #fafafa;
  }

  .subContentBox {
    width: 100%;
    height: 100%;
    flex: 1;


    display: flex;
    flex-direction: column;

    padding: 20px;
    box-sizing: border-box;
    /* align-items: center; */
  }


  /* 水平菜单样式 */
  .leftNav .el-menu--horizontal > .el-menu-item {
    height: 40px;
    line-height: 40px;
  }

  .leftNav .el-menu--horizontal > .el-menu-item a {
    text-decoration: none;
  }

  /* 左侧菜单悬停样式 */
  .leftNav .el-menu-item.is-active {
    background-color: #e7e7e7 !important;
    color: #fff;
    /* span {
      color: #fff !important;
    } */
  }

  .leftNav .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    padding: 0 45px;
    font-size: 12px;
    min-width: 200px;
  }

  .leftNav .el-submenu__title {
    font-size: 13px;
    height: 45px;
    line-height: 45px;
  }

  .leftNav .el-menu-item-group__title {
    padding: 0px;
  }

  .leftNav .el-submenu .el-menu-item {
    height: 35px;
    line-height: 35px;
  }

  .leftNav .el-menu-item {
    font-size: 12px;
    height: 45px;
    line-height: 45px;
  }
</style>
