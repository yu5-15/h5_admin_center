import { spellUrl } from "@/utils/security/util.js"
import axios from 'axios';

import { handleAlert,handleCofirm } from "@/utils/common/messageExt.js"

export default {
    name: 'update',
    props:['parm'],
    //数据
    data(){
        return {
            message: '吃饭',
            input: '',
            options:[{"label":"全部","value":"-100"},{"label":"测试","value":"1"}],
            value: '1',
            listData:[{id:1,name:"张三",age:12,status:"可用"}],
        }
    },
    mounted:function(){
        console.info("传过来的参数:"+this.parm.id);
    },
    //方法
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        tt(){

        },
        closePage()
        {
            console.info("123");
            //回调，调用父页面的函数，注意，这个listenTochildEvent，不是父级的方法名
            this.$emit('listenTochildEvent',this.parm.id);
        },
        toOtherPage()
        {
            // this.$router.push(
            //     {
            //         path: '/hr/update2',}
            //     );
            top.location.href = "http://localhost:8080/#/main/sub/hr/update2";
        }
      
       
    },
}