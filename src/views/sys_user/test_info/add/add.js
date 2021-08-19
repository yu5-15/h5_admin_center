//项目立项
import {spellUrl} from "@/utils/security/util.js"
import {handleMessage} from "@/utils/common/messageExt.js"
import {handleCofirm} from "@/utils/common/messageExt.js"
import {loadList} from "@/utils/common/wang_util.js"
import axios from 'axios';


export default {
  name: 'sys_user_add',
  //数据
  data() {
    return {
      //实体
      loadView: {
        name: "",// 用户名称
        // password: "",// 用户密码
        mobile: "",// 手机号码
        status: "",
      },
    }
  },
  mounted() {
    this.init()
  },

  //方法  project
  methods: {
    init() {
    },

    add: function (close_type) {
      // 一般性确认框
      handleCofirm('确认新增该用户吗？').then(res => {

        if (!this.loadView.name) {
          handleMessage("请输入用户名称", 3);
          return;
        }
        if (!this.loadView.mobile) {
          handleMessage("请输入用户电话号码", 3);
          return;
        }
        if (!this.loadView.password) {
          handleMessage("请输入用户密码", 3);
          return;
        }
        //定义业务参数
        var reqDataJson = this.loadView;
        //定义接口地址
        var apiPath = "sys/addUser/add.json";
        //加密,返回完整请求地址
        var url = spellUrl(reqDataJson, true, apiPath)
        console.info(url);

        //把数据赋值到Data的变量去
        // 发ajax请求,用以获取数据,此处地址意思是查询 github中 vue 星数最高的项目
        //ajax,得到数据
        axios.get(url).then(
          response => {
            const result = response.data;
            var resultCode = result.resultCode;
            if (resultCode != 1000) {
              handleMessage("操作失败", 4);
            } else {
              handleMessage("操作成功", 2);
              if (close_type == 1) {
                Object.assign(this.$data, this.$options.data());
                this.init();
              } else {
                this.closePage()
              }
              this.closePage()
            }
          }
        ).catch(
          response => {
            handleMessage("请求失败", 4);
          },
        );

        handleMessage("操作成功", 2);
        if (close_type == 1) {
          Object.assign(this.$data, this.$options.data());
          this.init();
        } else {
          this.closePage()
        }


      }).catch(err => {
        console.log('err', err) // cancel
        return;
      })
    },
    closePage: function () {
      console.info("123");
      //回调,调用父页面的函数,注意,这个listenTochildEvent,不是父级的方法名
      this.$emit('listenTochildEvent');
    },

  },
}
