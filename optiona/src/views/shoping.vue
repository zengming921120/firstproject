<template>
  <div class="shoping">
    <div class="shoping-head">
     <span @click="$router.go(-1)"><</span>
     <span style="margin-right: 150px">抢购</span>
    </div>
    <div class="shoping-nav">
      <span>08:00 <br/><a href="#">进行中</a></span>
      <span>12:00 <br/><a href="#">未开始</a></span>
      <span>16:00 <br/><a href="#">未开始</a></span>
      <span>20:00 <br/><a href="#">未开始</a></span>
    </div>
    <p class="shoping-alert"><span style="color: red;">抢购进行中,先下单先得哦</span><span>xx小时xx分xx秒</span></p>
    <div class="shoping-goodslis">
      <div class="shoping-descript">
      <p><img src="" alt=""></p>
      <p><span>xxxx</span><br/><span>￥xxxx</span><br/><span>￥xxx</span></p>
      </div>
      <p><span>立即抢购</span><br/><span>已售出0%</span></p>
    </div>
  </div>
</template>
<script>

</script>
<style>
 .shoping{
   width: 100%;
 }
  .shoping-head{
    color: white;
    width: 92%;
    padding: 10px 4%;
    background: red;
    display: flex;
    justify-content: space-between;
  }
  .shoping-nav{
    border-bottom: solid 1px #ccc;
    padding: 5px;
    display: flex;
    justify-content: space-around;
  }
  .shoping-alert{
    display: flex;
    justify-content: space-between;
  }
  .shoping-goodslis{
    width: 94%;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
  }
  .shoping-descript{
    display: flex;
  }

</style>
