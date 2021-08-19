import {spellUrl} from "@/utils/security/util.js"
import {handleAlert, handleCofirm} from "@/utils/common/messageExt.js";
import {loadList,deleteEmptyProperty} from "@/utils/common/wang_util.js"
import axios from 'axios';

//项目立项

export default {
  name: 'sys_user_update',
  props: ['sys_user_id'],
  //数据
  data() {
    return {
      // loadView: {},
      loadView: {},
      status_datas: [],
      type_datas: [],
      level_datas: [],
    }
  },

  mounted: function () {

    //静态初始化变量
    this.loadView = {
      id: this.sys_user_id,
      type: "",
      name: "",// 名称
      mobile: "",// 手机号
      status_id: 1,
    };

    //初始化页面执行的方法
    this.status_datas = [];

    this.type_datas = [];
    this.init()
  },
  //方法
  methods: {

    init: function () {
      //状态
      if (this.sys_user_id > 0){
        this.lodaData();
      }

      if (this.status_datas.length <= 1) {
        var reqDataJson = {};
        var apiPath = "sys/user/status/listAll.json";
        var addLabel = [];
        //前端自动装载-100的方法
        loadList(apiPath, reqDataJson, addLabel, resdata => {
          //回调赋值
          this.status_datas = resdata;
        })
      }

      if (this.type_datas.length <= 1) {
        var reqDataJson = {};
        var apiPath = "sys/user/type/listAll.json";
        var addLabel = [];
        //前端自动装载-100的方法
        loadList(apiPath, reqDataJson, addLabel, resdata => {
          //回调赋值
          this.type_datas = resdata;
        })
      }

    },

    lodaData() {
      //定义业务参数
      var reqDataJson = {
        id: this.sys_user_id
      };
      //定义接口地址
      var apiPath = "sys/addUser/getLoadById.json";
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
          this.loadView = data;

          console.info(data)
          // this.mans = result.data
        }
      ).catch(
        response => {
          handleAlert("操作失败", "提示", res => {
          });
        },
      );
    },

    update: function () {
      //定义业务参数
      var reqDataJson = this.loadView;
      reqDataJson.status = this.loadView.status_id;
      reqDataJson.type = this.loadView.type_id;
      reqDataJson = deleteEmptyProperty(reqDataJson);
      //定义接口地址
      var apiPath = "sys/addUser/update.json";
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
            alert("操作成功")
            this.closePage();
          }
        }
      ).catch(
        response => {
          alert('请求失败');
        },
      );
    },

    closePage() {
      console.info("123");
      //回调，调用父页面的函数，注意，这个listenTochildEvent，不是父级的方法名

      this.$emit('listenTochildEvent');
    },


  },
}
