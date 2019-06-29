<template>
  <div class="goodsinfor">
      <div class="goodsinfor-head">
        <span @click="$router.go(-1)"><</span>
        <span>商品详情</span>
        <span><img src="./imgs/分享.png" height="25" width="25"/></span>
      </div>
      <div class="goodsinfor-descript">
      <div class="goodsinfor-lunbo">
        <img :src="goodsinfors.imgurl" width="150" height="150">
      </div>
        <span>{{goodsinfors.goodsdescript}}</span><br/>
        <span>{{goodsinfors.goodsdescript}}</span><br/>
        <span><a href="#" @click.prevent style="color: red;">价格:</a><a href="#" @click.prevent style="color: red;">¥{{goodsinfors.goodsprice}}</a><a href="#" class="oldprice" @click.prevent>¥xxx</a></span><br/>
      </div>
        <span>售后保障</span><br/>
        <div class="goodsinfor-title">
          <span><img src="" alt=""><a href="#" @click.prevent>保障正品</a></span>
          <span><img src="" alt=""><a href="#" @click.prevent>维修保养</a></span>
          <span><img src="" alt=""><a href="#" @click.prevent>权威鉴定</a></span>
          <span><img src="" alt=""><a href="#" @click.prevent>假一赔三</a></span>
        </div>
        <ul>
          <li>本商品无质量问题不支持退换货</li>
        </ul>

        <div class="goodsinfor-tabbar">
          <span><img src="../views/home/imgs/customer-service.png" width="25" height="25"><br/><a href="#" @click.prevent>客服</a></span>
          <span><img src="../views/home/imgs/my-collect.png" width="25" height="25"><br/><a href="#" @click.prevent>收藏</a></span>
          <span @click="goodsinforshopcar"><img src="../views/home/imgs/shopcar.png" width="25" height="25"><a href="#" v-if="bols == 1" @click.prevent :class="shopcargoodscount>0?'goodsnum':null" style="color: white">{{shopcargoodscount}}</a><br/><a href="#" @click.prevent>购物车</a></span>
          <span style="background: #FF8587;"  class="addgoods" v-model="shopcargoodscount"><a href="#"  @click="changeshopcargoods" @click.prevent class="goodsinfor-add">加入购物车</a></span>
          <span  @click="goodsinforshoping" style="background: red;"><a href="#" @click.prevent class="goodsinfor-shoping">立即购买</a></span>
        </div>

  </div>
</template>
<script>
import bus from "@/util/bus"
import {getnum,change} from "@/api";
import {getItem} from "../util/cookie";
// import qs from "qs"

export default {
  name:"goodsinfor",
  data(){
    return{
      goodsinfors:[],
      arr:['data','data1','data2','data3','data4','data5','data6','data7','data8','data9'],
      id:'',
      shopcargoodscount:"",
      bols:''
    }
  },
  created() {
    this.getData();
    this.getshopcargoods();
    this.changebols()
  },

  mounted(){
    this.id=this.$route.query.id
    console.log(this.id);
  },
  methods:{

    changebols(){
      if(getItem('tokenID')!=undefined){
        this.bols=1
      }else {
        this.bols=null
      }
    },
    goodsinforshopcar(){
      // if(getItem('tokenID')!=undefined){
       this.$router.push("/shopcar")
      // }else {
      //   this.$router.push("/login")
      // }
    },
    goodsinforshoping(){
      if(getItem('tokenID')!=undefined){
        this.$router.push({
          name:'orderok',
          query:{id:this.id}
        })
      }else {
        this.$router.push("/login")
      }
    },
    getshopcargoods(){
      getnum().then(res=>{
        if(res.data.data!=null){
        let datas = res.data.data;
          console.log("存在");
          let str=0;
        for (let i = 0; i < datas.length; i++) {
          str+=datas[i].count;
        }
          this.shopcargoodscount=str;
        }

      })
    },
    changeshopcargoods:function(){
      if(getItem('tokenID')!=undefined){
        change({
          id:this.id
        }).then(res =>{
          this.getshopcargoods()
        })
      }else {
        this.$router.push("/login")
      }
    },
    getData:function(val){

      // getallgoods()
      this.$http({
        method:"get",
        url:"/getallgoods",
      }).then(res => {
        var result=res.data;
        console.log(result);
        // for(let k in result){
        //   for (let i = 0; i < result[k].length; i++) {
        //     if(result[k][i].path==val){
        //       console.log(result[k][i]);
        //       this.goodsinfors=result[k][i].imgurl;
        //       return;
        //       // console.log(this.goodsinfors)
        //     }
        //   }
        // }
        for (let i = 0; i < this.arr.length; i++) {
          for (let j = 0; j < result[this.arr[i]].length; j++) {

            if(result[this.arr[i]][j].path==val){

              this.goodsinfors=result[this.arr[i]][j];
              return;
            }

          }
        }
      });
    }

  },
  watch:{
    id(newval,oldval){
      this.getData(newval);
      console.log(newval)
    },

  }
}
</script>
<style>
  .goodsinfor{
    width: 100%;
    overflow: hidden;
  }

.goodsinfor-head{
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: red;
}
  .goodsinfor-head span{
    /*line-height: 45px;*/
    color: white;
    font-size: 16px;
    padding: 10px 15px;
  }
  .goodsinfor-lunbo{
    text-align: center;
    margin-top: 50px;
    width: 100%;
  }
  .goodsinfor-descript{

  }
  .goodsinfor-descript .oldprice{
    /*display: inline-block;*/
    /*border: solid 1px;*/
    /*text-line-through-color: red;*/
  }
  .goodsinfor-title{
    /*border: solid 1px;*/
    margin-left: 30px;
  }
  /*.goodsinfor-all ul{*/
    /*border: solid 1px;*/
    /*vertical-align: top;*/
  /*}*/
  .goodsinfor-tabbar{
    width: 100%;
    border: solid 1px;
    display: flex;
    flex: 5;
    justify-content: space-around;
    position: fixed;
    z-index: 200;
    bottom: 0px;
  }
  .goodsinfor-tabbar span{
    font-size: 15px;
    color: #000;
    text-align: center;
    border-right: solid 1px;
    padding: 5px 13px;
  }
  .goodsinfor-tabbar .goodsinfor-add{
    display: inline-block;
    margin-top: 15px;
  }
.goodsinfor-tabbar .goodsinfor-shoping{
  display: inline-block;
  margin-top: 15px;
}
.goodsinfor-tabbar .addgoods{
  position: relative;
}
  .goodsinfor-tabbar .goodsnum{
    position: absolute;
    left: 150px;
    border-radius: 100% ;
    background: red;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
</style>
