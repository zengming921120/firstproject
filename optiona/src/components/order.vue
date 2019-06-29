<template>
  <div class="order">
    <div class="order-header">
      <span @click="$router.go(-1)"><</span>
      <span class="order-title">确认订单</span>
    </div>
    <p class="order-address"><span>请添加地址信息</span><span> > </span></p>
    <div class="order-goodslis">
      <!--<router-link :to="'/goodsinfor/'+item.path">-->
        <div class="order-goods">
          <img :src="goodslis[0].imgurl" width="70" height="70">
          <span class="order-descript"><span>{{goodslis[0].goodsdescript}}</span><br/><span>xxx颜色xx尺码</span></span>
          <span><span class="order-sp1">¥xxx</span><br/><span class="order-sp2">¥{{goodslis[0].goodsprice}}</span><br/><span class="order-sp3">X{{goodslis[0].count}}</span></span>
        </div>
      <!--</router-link>-->
      <!--<div class="shopcarchanges" v-show="bol">-->
          <!--<span>-->
            <!--<span>-->
              <!--<a href="#" @click="shopcardel(item.path)" class="shopcar-del" @click.prevent style="color: red;">-</a>-->
              <!--<a href="#" class="shopcar-count" @click.prevent>{{item.count}}</a>-->
              <!--<a href="#" @click="shopcaradd(item.path)" class="shopcar-add" @click.prevent style="color: red;">+</a>-->
            <!--</span><br/>-->
            <!--<span>-->
              <!--<select name="" id="shopcar-select">-->
                <!--<option value="">xxxx</option>-->
              <!--</select>-->
            <!--</span>-->
          <!--</span>-->
        <!--<span @click="shopcardelete(item.path)">删除</span>-->
      <!--</div>-->
    </div>
    <span>没有可供使用的优惠券</span>
    <p><span>快递运费: 首单免邮</span><span>¥0</span></p>
    <div class="order-ly">
      <span>卖家留言:</span>
      <input type="text" placeholder="请填写你的备注信息">
    </div>
    <div class="order-all">
      <span>共计xx件</span>
      <span style="color: red;">小计:¥xxxx</span>
    </div>
    <div class="order-alls">
      <span>合计:<a href="#">¥xxx</a></span>
      <span>提交订单</span>
    </div>
  </div>
</template>
<script>
  import {getidgoods} from "../api";
  import bus from "@/util/bus"
  export default {
  name:"order",
  data(){
    return{
      goodslis:[],
      id:''
    }
  },
    created(){
      this.getData();
    },
  methods:{
    getData(){
      console.log(this.id)

    }
  },
    mounted(){
      console.log(this.$route.query.id)
      getidgoods({
        id:this.$route.query.id
      }).then(res=>{
        console.log(res.data.data);
        this.goodslis=res.data.data;
        console.log(5555555);
      })
    },
    watch:{
      id(newval,oldval){
        console.log(newval,oldval)
      }
    }

  }
</script>
<style>
  .order-header{
    color: white;
    background: red;
    width: 96%;
    padding: 10px 2%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
  }
  .order-header .order-title{
    margin-right: 150px;
  }
  .order-address{
    width: 92%;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;
    padding: 15px 4%;
    margin-top: 40px;
  }
  .order-goods{
    position: relative;
    width: 96%;
    padding: 0px 2%;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;
  }
  .order .order-descript span{
    display: inline-block;
    padding: 5px 0;
  }
  .order .order-sp1,.order-sp3{
    padding: 2px;
    float: right;
    color: #ccc;
    font-size: 13px;
  }
  .order .order-sp2{
    color: red;
  }
</style>
