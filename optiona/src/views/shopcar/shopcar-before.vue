<template>
  <div class="shopcarbefore">
  <span class="shopcarbefore-head">购物车</span>
  <div class="shopcarbefore-login">
    <div class="shopcarbefore-box">
      <p style="font-size: 14px">您还没有登录<br/>登录后可以查看购物车</p>
      <router-link to="/login"><button>登录</button></router-link>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    name:'shopcarbefore',

  }
</script>
<style>
  .shopcarbefore{
    width: 100%;
  }
  .shopcarbefore-head{
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 20px 0px;
    background: red;
  }
  .shopcarbefore-login{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .shopcarbefore-box{
    position: absolute;
    left: 50%;
    top: 30%;
    transform:translate(-50%,0);
  }
  .shopcarbefore-login button{
    border:solid 1px red;
    width: 150px;
    height: 30px;
    background: white;
    color: red;

  }
</style>
