<template>
  
  <div id="app">
     <!-- 顶部菜单 -->
    <div class="topNav">
      <div class="topNavLeftBox">
          <div>XXXXXXXXXXXXX系统</div>
          <el-menu :default-active="activeIndex" style="height:40px;" background="#background"  background-color	="#3997ef" text-color="#ffffff" active-text-color="#ffffff"  mode="horizontal">
            <el-menu-item index="1"><router-link to="/view1">工作台</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/view2">人事</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/view2">审核</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/view2">项目</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/view2">财务</router-link></el-menu-item>
        </el-menu>
        </div>
    </div>
    <div class="mainBox">
      <!-- 左侧菜单 -->
      <div class="leftNav">
        
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fafafa"
      text-color="#888888"
      active-text-color="#3997ef">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>招聘</span>
        </template>
        <el-menu-item-group >
          <!-- <template slot="title">招聘流程申请操作</template> -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
      </div>
      <!-- 内容区域 -->
      <router-view class="contentBox"/>

    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
        activeIndex:"1"
        }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
.topNav{
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

.topNavLeftBox{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  color: #ffffff;
  font-size: 14px;
}

.mainBox{
  width: 100%;
  height: 100%;
  background:white;


  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-content: center; */
  /* align-items: center; */
}

.leftNav{
  width: 220px;
  min-width: 220px;
  height: 100%;
  background:#fafafa;
}
.contentBox{
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
.el-menu--horizontal>.el-menu-item{
  height: 40px;
  line-height: 40px;
}
.el-menu--horizontal>.el-menu-item a{
    text-decoration: none;

}

/* 左侧菜单悬停样式 */
.el-menu-item.is-active {
      background-color: #e7e7e7 !important;
      color: #fff;
      /* span {
        color: #fff !important;
      } */
    }
</style>
