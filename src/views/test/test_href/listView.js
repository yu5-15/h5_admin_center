import {spellUrl} from "@/utils/security/util.js"
import {loadList} from "@/utils/common/wang_util.js"
import axios from 'axios';


export default {
  name: 'view1Vue',
  //数据
  data() {
    return {
      message: '吃饭',
      input: '',
      // total:"1000",
      label: '',
      options: [{"label": "全部", "value": "-100"}],
      value: '-100',
      listData: [],
      total: 1,
      // current_change:"",
      currentPage: 1,
      pager: 1,
      // next:1,
      // prev:1,
    }
  },
  // options:[{"label":"全部","value":"-100"},{"label":"测试","value":"1"}],
  mounted() {
    //初始化页面执行的方法
    this.init()
  },
  //方法
  methods: {
    //初始化页面执行的方法
    init() {
      //加载列表
      if (this.listData.length < 1) {
        // this.lodaData();
      }
      //加载下拉框值
      if (this.options.length == 1) {
        var reqDataJson = {};
        var apiPath = "position/recruit/status/listAll.json";
        var addLabel = [{"label": "全部", "value": "-100"}];
        //前端自动装载-100的方法
        loadList(apiPath, reqDataJson, addLabel, action => {
          //回调赋值
          this.options = action;
        })
      }
    },
    tt01: function () {
      window.open("http://localhost:8081/#/main/sub/hr/recruit/list");
    },
    tt02: function () {
      window.open("http://localhost:8081/#/main/sub/hr/resume/list");
    },
    tt03: function () {
      window.open("http://localhost:8081/#/main/sub/hr/interview/list");
    },
    tt04: function () {
      window.open("http://localhost:8081/#/main/sub/hr/release/list");
    },
    tt05: function () {
      window.open("http://localhost:8081/#/main/sub/hr/leave/list");
    },
    tt06: function () {
      window.open("http://localhost:8081/#/main/sub/hr/summary/list");
    },
    tt07: function () {
      window.open("http://localhost:8081/#/main/sub/hr/summary_apply/list");
    },
    tt08: function () {
      window.open("http://localhost:8081/#/main/sub/hr/guarantee/list");
    },
    tt09: function () {
      window.open("http://localhost:8081/#/main/sub/hr/achievements_day/list");
    },
    tt10: function () {
      window.open("http://localhost:8081/#/main/sub/hr/achievements_month/list");
    },
    tt11: function () {
      window.open("http://localhost:8081/#/main/sub/hr/achievements_month_confirm/list");
    },
    tt12: function () {
      window.open("http://localhost:8081/#/main/sub/hr/achievements_month_apply/list");
    },
    tt13: function () {
      window.open("http://localhost:8081/#/main/sub/hr/notice/list");
    },
    tt14: function () {
      window.open("http://localhost:8081/#/main/sub/hr/post/list");
    },
    tt15: function () {
      window.open("http://localhost:8081/#/main/sub/hr/trial/list");
    },
    tt16: function () {
      window.open("http://localhost:8081/#/main/sub/hr/archives/list");
    },
    tt17: function () {
      window.open("http://localhost:8081/#/main/sub/hr/contract/list");
    },
    tt18: function () {
      window.open("http://localhost:8081/#/main/sub/hr/quit_apply/list");
    },
    tt19: function () {
      window.open("http://localhost:8081/#/main/sub/hr/quit/list");
    },
    tt20: function () {
      window.open("http://localhost:8081/#/main/sub/hr/train_apply/list");
    },
    tt21: function () {
      window.open("http://localhost:8081/#/main/sub/hr/train/list");
    },
    tt22: function () {
      window.open("http://localhost:8081/#/main/sub/hr/employe/list");
    },
    tt23: function () {
      window.open("http://localhost:8081/#/main/sub/hr/change_post/list");
    },
    tt24: function () {
      window.open("http://localhost:8081/#/main/sub/hr/violation/list");
    },
    tt25: function () {
      window.open("http://localhost:8081/#/main/sub/hr/reward/list");
    },
    tt26: function () {
      window.open("http://localhost:8081/#/main/sub/hr/enterprise_archives/list");
    },
    tt27: function () {
      window.open("http://localhost:8081/#/main/sub/project/info/list");
    },
    tt28: function () {
      window.open("http://localhost:8081/#/main/sub/project/post_know/list");
    },
    tt29: function () {
      window.open("http://localhost:8081/#/main/sub/project/inside/list");
    },
    /* 合同详解会会议纪要*/
    tt30: function () {
      window.open("http://localhost:8081/#/main/sub/project/detailed/list");
    },
    /* 项目标准、质量、安全管理*/
    tt31: function () {
      window.open("http://localhost:8081/#/main/sub/project/security/list");
    },
    /* 碰头会会议纪要*/
    tt32: function () {
      window.open("http://localhost:8081/#/main/sub/project/meeting/list");
    },
    /* 项目角色*/
    tt33: function () {
      window.open("http://localhost:8081/#/main/sub/project/role/list");
    },
    /* 定库额*/
    tt34: function () {
      window.open("http://localhost:8081/#/main/sub/project/inventory/list");
    },
    /* 现场影像资料记录单*/
    tt35: function () {
      window.open("http://localhost:8081/#/main/sub/project/video/list");
    },
    /* 设置固定巡查摄像坐标点*/
    tt36: function () {
      window.open("http://localhost:8081/#/main/sub/project/coordinate/list");
    },
    /* 现场影响因素解决方案*/
    tt37: function () {
      window.open("http://localhost:8081/#/main/sub/project/solve/list");
    },
    /* 人机材询价*/
    tt38: function () {
      window.open("http://localhost:8081/#/main/sub/project/inquiry/list");
    },
    /* 人员登记备案表*/
    tt39: function () {
      window.open("http://localhost:8081/#/main/sub/project/man/list");
    },
    /* 机械登记备案表*/
    tt40: function () {
      window.open("http://localhost:8081/#/main/sub/project/machinery/list");
    },
    /* 劳务队伍和劳务人员管理资料*/
    tt41: function () {
      window.open("http://localhost:8081/#/main/sub/project/ranks/list");
    },
    /* 甲方、监理等相关人员通讯录*/
    tt42: function () {
      window.open("http://localhost:8081/#/main/sub/project/three/list");
    },
    /* 新进场人、机、材备案登记表*/
    tt44: function () {
      window.open("http://localhost:8081/#/main/sub/project/new/list");
    },
    /* 签证*/
    tt45: function () {
      window.open("http://localhost:8081/#/main/sub/project/visa/list");
    },
    /* 施工日志*/
    tt46: function () {
      window.open("http://localhost:8081/#/main/sub/project/journal/list");
    },
    /* 技术交底*/
    tt47: function () {
      window.open("http://localhost:8081/#/main/sub/project/disclose/list");
    },
    /* 施工任务进度记录*/
    tt43: function () {
      window.open("http://localhost:8081/#/main/sub/project/task/list");
    },
    /* 施工作业计划申请表*/
    tt48: function () {
      window.open("http://localhost:8081/#/main/sub/project/apply/list");
    },
    /* 人、机、材考核评价表*/
    tt49: function () {
      window.open("http://localhost:8081/#/main/sub/project/evaluate/list");
    },
    /* 日常标准巡查确认评价表*/
    tt50: function () {
      window.open("http://localhost:8081/#/main/sub/project/standard/list");
    },
    /* 工程收量单*/
    tt51: function () {
      window.open("http://localhost:8081/#/main/sub/project/data/list");
    },
    /* 质量验收单*/
    tt52: function () {
      window.open("http://localhost:8081/#/main/sub/project/quality/list");
    },
    /* 工程验收申请单*/
    tt53: function () {
      window.open("http://localhost:8081/#/main/sub/project/apply/list");
    },
    /* 工程验收报告*/
    tt54: function () {
      window.open("http://localhost:8081/#/main/sub/project/report/list");
    },
    /* 流程类型设置*/
    tt55: function () {
      window.open("http://localhost:8081/#/main/sub/hr/pass/flowmodel/list");
    },

      /*审批流程设置 project/company/list */
    tt56: function () {
      window.open("http://localhost:8081/#/main/sub/hr/pass/flow/list");
    },
      /*审批流程设置*/
    tt57: function () {
      window.open("http://localhost:8081/#/main/sub/project/company/list");
    },
    tt58: function () {
      window.open("http://localhost:8081/#/main/sub/project/setup/seal/info/list");
    },

    /*项目三方*/
    tt59: function () {
      window.open("http://localhost:8081/#/main/sub/project/employe_three/list");
    },
    /*验收备案表*/
    tt60: function () {
      window.open("http://localhost:8081/#/main/sub/project/check/list");
    },
    /*项目部组建*/
    tt61: function () {
      window.open("http://localhost:8081/#/main/sub/project/user/list");
    },
    /*经营目标*/
    tt62: function () {
      window.open("http://localhost:8081/#/main/sub/project/manage_target/list");
    },
    /*前期备案附件明细*/
    tt64: function () {
      window.open("http://localhost:8081/#/main/sub/project/previous/list");
    },
    /*前期备案附件明细*/
    tt65: function () {
      window.open("http://localhost:8081/#/main/sub/project/water/list");
    },
    /*开工备案附件*/
    tt66: function () {
      window.open("http://localhost:8081/#/main/sub/project/working/list");
    },
    /*项目信息详情*/
    tt67: function () {
      window.open("http://localhost:8081/#/main/sub/project/info/update");
    },
    /*运营部部组建*/
    tt63: function () {
      window.open("http://localhost:8081/#/main/sub/project/project_user/list");
    },
    tt99: function () {
      window.open("http://localhost:8081/#/main/sub/project/review/list");
    },
    tt100: function () {
      window.open("http://localhost:8081/#/main/sub/project/complete/list");
    },
    aa01: function () {
      window.open("http://localhost:8081/#/main/sub/material/memo/list");
    },
    aa02: function () {
      window.open("http://localhost:8081/#/main/sub/material/notice/list");
    },
  },
}
