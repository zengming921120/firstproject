<template>
  <div class="shopingspree">
  <div class="shopingspree-title">
    <span class="spree-title"><a href="#" @click.prevent>抢购区</a><a href="#" @click.prevent>xx点场</a><a href="#" @click.prevent>xx小时xx分xx秒</a></span>
    <router-link to="/shopingspree"><span style="color: red;">全部抢购 <img :src="imgurl" width="12" height="12"></span></router-link>
  </div>
    <router-link to="/shoping"><nav class="main">
        <div class="spreegoods" v-for="item in datas">

        <p><img :src="item.src" width="100" height="100"/></p>
        <span>xxxxx <br/><a href="#" style="color: red;">xxx价格</a></span>
      </div>
      </nav></router-link>

  </div>
</template>
<script>
 export default {
   name:"shopingspree",
   data(){
     return{
       imgurl:require('./imgs/symbol.png'),
       datas:[
         {src:require('./imgs/qg1.jpg')},
         {src:require('./imgs/qg2.jpg')},
         {src:require('./imgs/qg3.jpg')},
         {src:require('./imgs/qg4.jpg')},
         {src:require('./imgs/qg5.jpg')},
         {src:require('./imgs/qg6.jpg')}]
     }
   }
 }
</script>
<style>
  .shopingspree{
    background: white;
  }
   .shopingspree-title{
     font-size: 14px;
     width: 96%;
     padding: 2%;
     display: flex;
     justify-content: space-between;
     /*border: solid 1px;*/
   }
  .spree-title{
    width: 60%;
    display: flex;
    justify-content: space-around;
  }

  .spreegoods{
    flex-shrink: 0;
    /*border: solid 1px;*/
  }
 .main{
  text-align: center;
   display: flex;
   overflow: auto;
}
</style>
