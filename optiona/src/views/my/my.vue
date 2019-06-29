<template>
  <div class="my">
    <span class="my-head">我的</span>
  <div class="my-order">
    <span @click="myorderall">全部订单</span><span>></span>
  </div>
  <div class="li-nav">
    <div class="li" v-for="item in imgurl1">
      <span><img :src="item.src" width="28" height="28"/></span>
      <p>{{item.title}}</p>
    </div>
  </div>
    <div class="footer-nav">
  <div class="footer" v-for="value in imgurl2">
    <span><img :src="value.src" width="20" height="20"/> {{value.title}}</span><span>></span>
  </div>
    </div>
    <div class="last-nav">
  <div class="last" v-for="(val,index) in imgurl3" @click="set(index)">
    <span><img :src="val.src" width="20" height="20"/> {{val.title}}</span><span>></span>
  </div>
      <div class="my-last"></div>
    </div>
    <tabBar :index="4" :allcount="goodscount"></tabBar>
  </div>

</template>
<script>
  import {getItem} from "../../util/cookie";
  import {getnum} from "../../api";
  import tabBar from '@/components/tabBar'
   export default {
     data(){
       return{
         goodscount:'',
         imgurl1:[
           {src:require('./imgs/payment.png'),title:'代付款'},
           {src:require('./imgs/payment.png'),title:'待接单'},
           {src:require('./imgs/payment.png'),title:'待收货'},
           {src:require('./imgs/payment.png'),title:'待评价'},
           {src:require('./imgs/payment.png'),title:'售后服务'},
         ],
         imgurl2:[
           {src:require('./imgs/coupon.png'),title:'优惠券'},
           {src:require('./imgs/coupon.png'),title:'我的收藏'},
           {src:require('./imgs/coupon.png'),title:'我的关注'},
           {src:require('./imgs/coupon.png'),title:'我的足迹'},
           {src:require('./imgs/coupon.png'),title:'地址管理'},
           {src:require('./imgs/coupon.png'),title:'我的足迹'},
         ],
         imgurl3:[
           {src:require('./imgs/customer-service.png'),title:'在线客服'},
           {src:require('./imgs/help.png'),title:'帮助中心'},
           {src:require('./imgs/customer-service.png'),title:'意见反馈'},
           {src:require('./imgs/system-set.png'),title:'系统设置'},
         ]
       }
     },
     created(){
       this.getData()
       // order().then(res=>{
       //   console.log(res)
       // })
     },
     components:{
       tabBar,

     },
     mounted(){
        this.$nextTick(()=>{
          // this.set()
        })
     },
     methods:{
       getData(){
         getnum().then(res=>{
           console.log(res.data.data);
           if(res.data.data!=null){
             let datas = res.data.data;
             let str=0;
             for (let i = 0; i < datas.length; i++) {
               str+=datas[i].count;
             }
             this.goodscount=str;
           }
         })
       },
       set(v){
         if(getItem('tokenID')!=undefined){
           if(v==3){
             this.$router.push('/myset')
           }
         }else {
           this.$router.push('/login')
         }
       },
       myorderall(){

       }
     }
   }
</script>
<style>
  .my{
    width: 100%;
    background: #eee;
  }
  .my-head{
    position: fixed;
    z-index: 100;
    top: 0;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: white;
    height: 100px;
    line-height: 100px;
    /*padding: 30px 0px;*/
    background: red;
  }
.my-order{
  display: flex;
  justify-content: space-between;
  width: 96%;
  padding: 10px 2%;
  margin-top: 100px;
  background: white;
}
  .navs span{
    display: inline-block;
    padding: 10px 10px;
  }
.li-nav{
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: solid 1px rgba(7,17,27,0.3);
  padding: 5px 0;
  background: white;
}
  .li{
    padding-top: 10px;
    width: 100%;
    border-right: solid 1px rgba(7,17,27,0.1);
  }
  .footer-nav{
    margin-top: 10px;
  }
.footer{
  display: flex;
  justify-content: space-between;
  width: 96%;
  height: 25px;
  padding: 2%;
  border-bottom: solid 1px rgba(7,17,27,0.1);
  background: white;
}
  .footer span{
    display: inline-block;
  }

  .last-nav{
    margin-top: 10px;
  }
  .my-last{
    width: 100%;
    margin-top: 60px;
  }
  .last{
    display: flex;
    justify-content: space-between;
    width: 96%;
    height: 25px;
    line-height: 25px;
    padding: 2%;
    border-bottom: solid 1px rgba(7,17,27,0.1);
    background: white;
  }
  .last span{
    display: inline-block;
  }
</style>
