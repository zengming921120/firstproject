<template>
  <div class="my-set">
    <div class="my-sethead">
      <span style="float: left;" @click="$router.go(-1)"><</span>系统设置
    </div>
    <div class="my-setcontent">
      <p @click="goback"><span>退出登录</span><span>></span></p>
      <p><span>关于</span><span>></span></p>
    </div>
  </div>
</template>
<script>
  import {setItem} from "../../util/cookie";
  import {getItem} from "../../util/cookie";
  // import {clearAllCookies} from "../../util/cookie";
  import goback from "@/api"
 export default {
   name:'myset',
   created(){

   },
   methods:{
     goback(){
       //     clearAllCookies();
     }
   },
   mounted() {

   }
 }
</script>
<style>
  .my-set{
    width: 100%;
  }
  .my-sethead{
    color: white;
    width: 90%;
    text-align: center;
    padding: 10px 5%;
    background: red;
  }
  .my-setcontent p{
    border-bottom: solid 1px #ccc;
    margin: 5px 0;
    display: flex;
    width: 92%;
    padding: 0 4%;
    justify-content: space-between;
  }


</style>
