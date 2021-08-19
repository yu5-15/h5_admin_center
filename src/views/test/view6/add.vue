<template>
  <div class="aa" @click="tt()">
    12345678976543234567865
    324564321
    54ytrew456
  </div>


 
</template>

<style>
.aa{
    display: flex;
    height: 200px;
}
</style>

<script>
export default {
    
    name: 'Add',//这个LoginName最好和引入的vue的LoginName相同

    methods:{
        tt(){
            console.info("123");
            //回调，调用父页面的函数
            this.$emit('listenTochildEvent');
        }
}
}


</script>