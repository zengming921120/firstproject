<template>
  <div class="shopcarafter">
    <div class="shopcarafter-head">
      购物车
    </div>
    <div class="shopcarafter-mainbox">
      <div class="shopcarafter-before">
      购物车空空如也
      </div>
    </div>
      <div class="shopcarafter-after" >
        <input type="checkbox"><span><a href="#"></a><a href="#"></a></span>
      </div>
    <div class="shopcarafter-footer">
      <input type="checkbox"><span>合计:<a href="#" @click.prevent style="color: red;">0</a></span><span class="shopcarafter-pay"><a href="#" @click.prevent style="color: white;">去结算</a></span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'shopcarafter',
  }
</script>
<style>
  .shopcarafter-head{
    width: 100%;
    padding: 10px 0;
    position: fixed;
    top: 0;
    text-align: center;
    background: red;
  }
  .shopcarafter-mainbox{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .shopcarafter-before{
    position: absolute;
    left: 50%;
    top: 30%;
    transform:translate(-50%,0);
  }
  .shopcarafter-footer{
    border-top: solid 1px #ccc;
    /*padding-top: 15px;*/
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 70px;
  }
  .shopcarafter-footer input{
    margin-top: 10px;
  }
 .shopcarafter-pay{
   background: red;
 }
  .shopcarafter-footer span{
    /*display: inline-block;*/
    padding: 10px 25px;
  }
</style>
