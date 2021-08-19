import { spellUrl } from "@/utils/security/util.js"
import axios from 'axios';

import { handleAlert,handleCofirm } from "@/utils/common/messageExt.js"

let id = 1000;

export default {
    name: 'view1Vue',

    
    //数据
    data(){
        return {
            message: '吃饭',
            input: '',
            options:[{"label":"全部","value":"-100"},{"label":"测试","value":"1"}],
            value: '1',
            listData:[{id:1,name:"张三",age:12,status:"可用"}],
            dialogTableVisible: false,
            levelData: [{
                id: 1,
                label: '项目名称',
                children: [{
                    id: 2,
                    label: '单位工程1',
                    children: [{
                        id: 3,    
                        label: '分部工程1',
                        children: [{
                            id: 4,
                            label: '分项工程1',
                        children: [{
                            id: 5,
                            label: '子分项工程1'
                          },{
                            id: 6,
                            label: '子分项工程2'
                          }]
                      }]
                  },{
                        id:7,
                        label: '分部工程2'
                  }]
                }]
              }
            ],
            expandedKeys:[1],
        }
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
        levelAppend(data) {
            // const newChild = { id: id++, label: 'testtest', children: [] };
            // if (!data.children) {
            //   this.$set(data, 'children', []);
            // }
            // data.children.push(newChild);
            console.info(data.id);
          },
    
          levelRemove(node, data) {
            // const parent = node.parent;
            // const children = parent.data.children || parent.data;
            // const index = children.findIndex(d => d.id === data.id);
            // children.splice(index, 1);
            console.info(data.id);

          },
          levelClick(data)
          {
            console.info(data.id);
            // this.expandedKeys = []
            // this.expandedKeys = [data.id]
            
          }
      
       
    },
}