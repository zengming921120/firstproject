<template>
  <div class="homegoods">
    <div class="homegoods-head">
      <span @click="$router.go(-1)"><</span>
      <span style="margin-right: 150px">商品列表</span>
    </div>
    <div class="homegoods-logo">
      <img src="#" alt="">
    </div>
    <div class="homegoods-lis">
      <span><img src="#" alt=""></span>
      <p><span>xxxxx</span><br/><span><a href="#" style="color: red;">xxx</a><a href="#">xxxx</a></span></p>
    </div>
  </div>
</template>
<script>
 export default {
   name:'homegoods'
 }
</script>
<style>
 .homegoods{
   width: 100%;
 }
  .homegoods-head{
    color: white;
    display: flex;
    justify-content: space-between;
    background: red;
    width: 94%;
    padding: 10px 3%;
  }
  .homegoods-logo{
    width: 100%;
  }
  .homegoods-lis{
    display: flex;
    justify-content: space-between;
    width: 92%;
    padding: 0 4%;
  }
  .homegoods-lis p{

  }
</style>
