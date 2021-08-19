import {spellUrl} from "@/utils/security/util.js"
import {loadList} from "@/utils/common/wang_util.js"
import {handleAlert} from "@/utils/common/messageExt.js";
import axios from 'axios';
import update from '../update/update.vue';
import detail from '../detail/detail.vue';
import add from '../add/add.vue';

//请假申请
export default {
  name: 'hr_leave_list',
  //弹出需要用到组件
  components: {
    update,
    detail,
    add,
  },
  //数据
  data() {
    return {
      //搜索条件
      seach_value: '', //搜索文本
      select_data: [],//搜索下拉
      selected_value: -100,//已经选中的value
      //列表
      listData: [],   //搜索结果列表
      //分页
      total: 1,       //总页数
      currentPage: 1,   //当前页

      sys_user_id: -100,

      page_size: 10,

      //弹出框
      dialogTableVisible_up: false,
      dialogTableVisible_de: false,
      dialogTableVisible_ad: false,

    }
  },

  mounted() {
    //假数据-------------------------
    //初始化页面执行的方法
    this.init()
  },
  //方法
  methods: {
    //初始化页面执行的方法
    init() {
      //加载列表--------------------------------
      if (this.listData.length < 1) {
        this.lodaData();
      }
      //加载下拉框值----------------------------
      if (this.select_data.length <= 1) {
        var reqDataJson = {};
        var apiPath = "sys/user/status/listAll.json";
        var addLabel = [{"label": "全部", "value": -100}];
        //前端自动装载-100的方法
        loadList(apiPath, reqDataJson, addLabel, resdata => {
          //回调赋值
          this.select_data = resdata;
        })
      }

    },

    //加载列表的方法
    lodaData() {
      //定义业务参数
      // var project_id = localStorage.getItem('project_id');
      var reqDataJson = {
        page_size: this.page_size,
        'status': this.selected_value,
        'name': this.seach_value,
        'page': this.currentPage,
      };
      //定义接口地址
      var apiPath = "sys/user/list.json";
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
          this.listData = data;
          var pager_page = result.pager;
          this.total = pager_page.totalRecord;
        }
      ).catch(
        response => {
          handleAlert("操作失败", "提示", res => {
          });
        },
      );
    },

    handleSizeChange(val) {
      this.page_size = val;
      this.currentPage = 1;
      this.lodaData();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.lodaData();
      console.log(`当前页: ${val}`);
    },

    //新增-------------------修改--------------------详情
    add: function () {
      this.showAddPage();
    },
    update: function (key) {
      this.sys_user_id = key;
      this.showUpdatePage();
    },
    detail: function (key) {
      this.sys_user_id = key;
      this.showDetailPage();
    },

    search: function () {
      console.info("值改变事件")
      this.lodaData()
    },
    reset: function () {
      console.info("值改变事件")
      this.currentPage = 1;
      this.selected_value = -100;
      this.seach_value = "";
      this.lodaData()
    },
    //获得点击的页数
    created: function (currentPage) {
      this.currentPage = currentPage;
    },



    //弹出层
    showDetailPage() {
      this.dialogTableVisible_de = true;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    closeDetailPage() {
      this.dialogTableVisible_de = false;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    //弹出层
    showUpdatePage() {
      this.dialogTableVisible_up = true;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    closeUpdatePage() {
      this.lodaData();
      this.dialogTableVisible_up = false;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    //弹出层
    showAddPage() {
      this.dialogTableVisible_ad = true;//默认页面不显示为false,点击按钮将这个属性变成true
    },
    closeAddPage() {
      this.lodaData();
      this.dialogTableVisible_ad = false;//默认页面不显示为false,点击按钮将这个属性变成true
    },

    //新增-------------------修改--------------------详情


  },
}
