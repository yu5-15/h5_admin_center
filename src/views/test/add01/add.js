import {spellUrl} from "@/utils/security/util.js"
import axios from 'axios';

import update from '../update/update.vue';
import addMan from '../addMan/add.vue';


export default {
  name: 'view1Vue',

  //弹出需要用到组件
  components: {
    update,
    addMan
  },
  //数据
  data() {
    return {
      message: '吃饭',
      input: '',

      options: [{"label": "全部", "value": "-100"}, {"label": "测试", "value": "1"}],
      value: '1',
      listData: [{id: 1, name: "张三", age: 12, status: "可用"}],
      dialogTableVisible_add: false,
      dialogTableVisible_up: false,
      date_value1: "",//日期
      time_value1: "",//时间
      date_time_value1: "",//日期时间
      fileList: [], //显示用
      fileListOnline: [],//提交服务器用


      //一级菜单下拉
      menu1_datas: [
        {"label": "全部", "value": "-100"},
        {"label": "人事", "value": "29"},
        {"label": "项目", "value": "30"},
        {"label": "任务", "value": "31"},
        {"label": "审核", "value": "32"}],
      menu1_id: '-100',
      //二级菜单下拉
      menu2_datas: [
        {"label": "全部", "value": "-100"},
        {"label": "人事", "value": "29"},
        {"label": "项目", "value": "30"},
        {"label": "任务", "value": "31"},
        {"label": "审核", "value": "32"}],
      menu2_id: '',

      ref_menu_data:[{label:"测试1",key:1},{label:"测试2",key:2},{label:"测试3",key:3}],
      ref_menu_value:[2,1],
      mans: []

    }
  },
  //方法
  methods: {

    getObject() {
      console.log("选中的数据有" + this.ref_menu_value);
    },
    //弹出层
    showUpdatePage() {
      this.dialogTableVisible_up = true;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    closeUpdatePage() {
      console.info("close");
      this.dialogTableVisible_up = false;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    //弹出层
    showAddManPage() {
      this.dialogTableVisible_add = true;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    closeAddManPage(parm) {
      if (parm.employe_id != -100) {
        for (var i = 0, l = this.mans.length; i < l; i++) {
          for (var key in this.mans[i]) {
            if (this.mans[i]["employe_id"] * 1 == parm.employe_id * 1) {
              return alert("不能添加相同的审核人");
            }
          }
        }
        this.mans.push(parm)
      }
      this.dialogTableVisible_add = false;//默认页面不显示为false,点击按钮将这个属性变成true
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
    openAddMan: function () {
      this.showAddManPage();
    },


    //上传-------------------------------------------------
    handleRemove(file, fileList) {
      console.log(file, fileList);
      //console.info("删除"+file.name);
      for (var i = 0; i < this.fileListOnline.length; i++) {
        if (file.name == this.fileListOnline[i].name) {
          console.info("发现相同");
          //删除
          this.fileListOnline.splice(i, 1);
        }
      }
      console.info(this.fileListOnline.length);

    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    onUploadChange(file) {
      console.info(file);
      let param = new FormData(); // 创建form对象
      param.append('file1', file.raw); // 将文件存入file下面
      let config = {
        // 配置请求头
        headers: {'Content-Type': 'multipart/form-data'},
      }

      var url = "http://tian-api-upload.other.ren/upload_file.json";
      axios.post(url, param, config)
        .then(res => {
          var data = res.data;

          //定义json存储，用于删除或者删除名称name索引
          var item = {};
          item.name = file.name;
          item.url = data.data;
          this.fileListOnline.push(item);
          //console.log(this.fileListOnline);
        }).catch(err => {
        console.log(err)
      })
    },
    delete_employe: function (employe_id) {
      //     if (flow_master_type == 1) {
//   return messageShow("固定流程不能修改");
// }
//       for (var i = 0, l = jsonObj.length; i < l; i++) {
//         for (var key in jsonObj[i]) {
//           if (jsonObj[i]["id"] == id) {
//             this_i = i;
//             if (jsonObj[i]["type_id"] == 2) {
//               return messageShow("固定人员不能删除");
//             }
//           }
//         }
//       }
      this.mans = this.mans.filter((e => {
        return e.employe_id !== employe_id;
      }))
    },
  },
}
