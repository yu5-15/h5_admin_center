import { spellUrl,checkRespCode } from "@/utils/security/util.js"
import axios from 'axios';

import update  from '../update2/update2.vue';


export default {
    name: 'view1Vue',

    //弹出需要用到组件
    components: {
        update
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
            date_value1:"",//日期
            time_value1:"",//时间
            date_time_value1:"",//日期时间
            fileList: [], //显示用
            fileListOnline:[],//提交服务器用
            updateParm:{'id':1},//参入修改页面参数

            ref_menu_data:[{label:"测试1",key:1},{label:"测试2",key:2},{label:"测试3",key:3}],
            ref_menu_value:[2,1],


            // 意见列表
            reverse: false,
            activities: [{
                content: '李总：很好，初试复试',
                timestamp: '2018-04-15'
            }, {
                content: '杨总：很好，复试通过',
                timestamp: '2018-04-13'
            }, {
                content: '张总：很好，面试通过',
                timestamp: '2018-04-11',
                color: '#3997ef'
            }],

            imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
            ],

        }
    },
    //方法
    methods:{
        left_change(parm){
            console.info(parm);
            //left-check-change=left_change()
        },
        //弹出层
        showUpdatePage(){
            this.dialogTableVisible=true;//默认页面不显示为false,点击按钮将这个属性变成true
        },
        closeUpdatePage(parm){

            console.info(parm);
            this.dialogTableVisible=false;//默认页面不显示为false,点击按钮将这个属性变成true
        },

        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        openPage:function ()
        {
            this.showUpdatePage();
        },


        //上传-------------------------------------------------
        handleRemove(file, fileList) {
            console.log(file, fileList);
            //console.info("删除"+file.name);
            for(var i=0;i<this.fileListOnline.length;i++)
            {
                if(file.name == this.fileListOnline[i].name)
                {
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
            return this.$confirm(`确定移除 ${ file.name }？`);
          },
        onUploadChange(file){
            console.info(file);
            let param = new FormData(); // 创建form对象
            param.append('file1', file.raw); // 将文件存入file下面
            let config = {
                // 配置请求头
                headers: {'Content-Type': 'multipart/form-data'},
             }

            var url = "http://tian-api-upload.other.ren/upload_file.json";
            axios.post(url, param, config)
            .then(res =>{
                var data = res.data;

                const result = res.data;
                var resultCode = result.resultCode;

                 //对返回进行校验---------------
                var res = checkRespCode(this.$router,resultCode);
                if(!res)
                    return;
                //---------------------------

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
      //上传---------------------------------------------------

      test()
      {

        //对返回进行校验---------------
        var res = checkRespCode(this.$router,1006);
        if(!res)
            return;
        //---------------------------


        //一般性提示框
        //handleAlert("内容","标题",res => {});

        //一般性确认框
        // handleCofirm('确认删除该标签吗？').then(res => {
        //      console.log("OK") // OK
        // }).catch(err => {
        //     console.log('err', err) // cancel
        // })

      },
      download(fileUrl)
      {
          console.info(fileUrl);
      },
    },
}
