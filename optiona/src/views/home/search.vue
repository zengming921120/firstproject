<template>
  <div class="heads">
    <div class="warps">
    <span ><img :src="list[0].src" /></span><router-link to="/goodsSearch"><input type="text" placeholder="搜索内容"></router-link>
    </div>
    <div class="mesage">
      <img :src="list[1].src" width="35px" height="35px"/>
    </div>
  </div>
</template>
<script>
  export default {
    name:'search',
    data(){
      return{
        list:[{src:require('./imgs/搜索.png')},{src:require('./imgs/message.png')}]
      }
    },
    methods:{
      // gosearch(){
      //   this.$router.push("/goodsSerarc")
      // }
    }
  }

</script>
<style>
  .heads{
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 100%;
  }
   .warps{
     margin-left: 25px;
     padding-top: 5px;
    height: 33px;
    border: solid 1px;
    background: white;
    border-radius: 10px;
  }
  .warps input{
    outline: none;
    border: none;
    vertical-align: top;
    width: 250px;
    height: 25px;
  }
  .warps span{
    display: inline-block;
    width: 30px;
    height: 30px;
  }
  .mesage{
    width: 10%;
  }

</style>
