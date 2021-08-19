import {loadList} from "@/utils/common/wang_util.js"

import update from '../update/update.vue';


export default {
  name: 'view1Vue',

  //弹出需要用到组件
  components: {
    update
  },
  //数据
  data() {
    return {

      options: [],
      value: '1',
      read_only: 1,
      listData: [{id: 1, name: "张三", age: 12, status: "可用"}],
      dialogTableVisible: false,
      imageUrl: '',//上传的图片
      label: '',//上传的图片

    }
  },
  mounted() {
    //初始化页面执行的方法
    this.init()
  },

//   loadList("enterprise_examine_flow_item/employe/listAll.json", "add_employe_id", "dataTemplate2", true, {}, function () {
// });

  //方法
  methods: {
    init: function () {
      //接收list层传过来的参数
      // var parm1 = JSON.parse(localStorage.getItem('parm1'));
      //项目下拉框
      if (this.read_only > 0) {
        var reqDataJson = {};
        var apiPath = "enterprise_examine_flow_item/employe/listAll.json";
        var addLabel = [];
        //前端自动装载-100的方法
        loadList(apiPath, reqDataJson, addLabel, action => {
          //回调赋值
          this.options = action;
        })
      }
    },
    add_employe: function () {
      let obj = {};
      obj = this.options.find(item => {
          return item.value === this.value;
        }
      )
      // obj.label
      var parm = {employe_id: this.value, employe_name: obj.label}
      console.info(parm)
      this.closePage(parm)
    },
    add_return:function(){
      var parm = {employe_id: -100, employe_name: "取消"}
      this.closePage(parm)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    openPage: function () {
      this.showUpdatePage();
    },
    closePage(parm) {
      console.info(parm)
      //回调，调用父页面的函数，注意，这个listenTochildEvent，不是父级的方法名
      this.$emit('listenTochildEvent', parm);
    },

  },
}
