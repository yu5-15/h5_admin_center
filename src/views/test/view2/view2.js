import { spellUrl } from "@/utils/security/util.js"
import axios from 'axios';

import { handleAlert,handleCofirm } from "@/utils/common/messageExt.js"

export default {
    name: 'view1Vue',

    components: {
    
      },
    //数据
    data(){
        return {
            message: '吃饭',
            input: '',
            options:[{"label":"全部","value":"-100"},{"label":"测试","value":"1"}],
            value: '1',
            listData:[{id:1,name:"张三",age:12,status:"可用"}],
            dialogTableVisible: false,
        }
    },
    //方法
    methods:{
        addUser(){
            this.dialogTableVisible=true;//默认页面不显示为false,点击按钮将这个属性变成true
        },
        closeUser(){
            console.info("close");
            this.dialogTableVisible=false;//默认页面不显示为false,点击按钮将这个属性变成true
        },
        tt:function ()
        {
            // console.info("123");
            this.input ="123";

            //定义业务参数
            //var reqDataJson = {'aa':"11"};
            //定义接口地址
            //var apiPath = "/hr/aa.json"
            //加密，返回完整请求地址
            //var url =  spellUrl(reqDataJson,false, apiPath)
            //console.info(url);
            //ajax，得到数据
            
            //把数据赋值到Data的变量去
            this.listData = [{id:1,name:"张4",age:22,status:"不可用"}];


            //this.$message.success('登陆成功！')
            //alertExt("测试","1234");
            // this.$alert("111", "12", {
            //             confirmButtonText: '确定',
            //             callback: action => {
            //               this.$message({
            //                 type: 'info',
            //                 message: `action: ${ action }`
            //               });
            //             }
            //           });


          handleAlert("123","333",action => {
            //回调
            console.info(action);
            })
            
            //this.addUser();
             return;


             // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
             var url = 'http://tian-api-admin-partner.other.ren/examineInfo/list.json?any=lQsvnHVGxKf3olAJL0IMrfF%2523jia%2523ai81jhFaiL%252FVNFQBQbtt%2523jia%2523Z42redzCV9MlniQfRQN3PnDnfW5eT%2523jia%2523qGs%2523jia%2523gV6lMdqKCU8hHgRawtBJMNJfjC1G6M5obWH8mTVDzA5p8Svpa%252FZGCbujt1wRpijwRGX%2523jia%2523BJUZZK0%252FOzxKpbGizxNkQuE191EfrForaWWJAbKKmEkn3Ui2CaUaNY3KrHpOZkpA%252FjTIvD8YH%252FZsp5r%252FaTe1CS9w%253D';
            
             axios.get(url).then(
                 response => {
                     const result = response.data;
                     var resultCode = result.resultCode;
                     var data = result.data;

                     console.log(result)
                     console.log("resultCode:"+resultCode);
                     console.log("data:"+data[0].id);
                 }
             ).catch(
                 response => {
                     alert('请求失败');
                 },
             );


        }
    },
}