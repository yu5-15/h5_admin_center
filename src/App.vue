<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


  import {spellUrl, checkLogin, checkLoginJump} from "@/utils/security/util.js"
  export default {
    name: 'app',

    mounted() {
      if (!checkLogin()) {
        this.$router.push(
          {
            path: '/login',
          }
        );
      } else {
        this.$router.push(
          {
            path: '/main/sub/template_task/from/list',
          }
        );
      }
    }
  }



</script>

<style>
body {
    margin: 0;
    padding: 0;
    /*background: url(assets/bg1.jpg) center !important;
      background-size: cover;*/
    /* background: #1F2D3D; */
    /* font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif; */
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

    font-size: 12px;
    -webkit-font-smoothing: antialiased;
  }
  </style>
