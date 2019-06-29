<template>
  <div class="shopcar">
    <div class="shopcar-addgoods" v-if="shows==0">
      <div class="shopcaraddgoods-head">
        <span style="color: white;" @click="$router.go(-1)"><</span>
        <span class="shopcar-bus">购物车</span> <span class="shopcar-change" @click="shopcarchange"><a @click.prevent href="#" v-show="!bol" style="color: white;">编辑</a><a
        @click.prevent href="#" v-show="bol" style="color: white;">完成</a></span>
      </div>
      <div :class="index==0?'shopcar-goodslis':'shopcar-active'" v-for="(item,index) in goodslis">
        <!--<router-link :to="'/goodsinfor/'+item.path" style="width: 100%;">-->
          <div class="shopcar-goods" @click="sendmsg(item.path)">
        <input type="checkbox" style="margin-top: 2rem">
        <img :src="item.imgurl" width="70" height="70">
        <span class="shopcar-descript"><span>{{item.goodsdescript}}</span><br/><span>xxx颜色xx尺码</span></span>
        <span><span class="shopcar-sp1">¥xxx</span><br/><span class="shopcar-sp2">¥{{item.goodsprice}}</span><br/><span class="shopcar-sp3">X{{item.count}}</span></span>
          </div>
        <!--</router-link>-->
        <div class="shopcarchanges" v-show="bol">
          <span>
            <span>
              <a href="#" @click="shopcardel(item.path)" class="shopcar-del" @click.prevent style="color: red;">-</a>
              <a href="#" class="shopcar-count" @click.prevent>{{item.count}}</a>
              <a href="#" @click="shopcaradd(item.path)" class="shopcar-add" @click.prevent style="color: red;">+</a>
            </span><br/>
            <span>
              <select name="" id="shopcar-select">
                <option value="">xxxx</option>
              </select>
            </span>
          </span>
          <span @click="shopcardelete(item.path)" style="color: red;">删除</span>
        </div>
      </div>
      <div class="shopcar-alert" v-if="alerts==1">
        <span>最小数量不能小于1</span>
      </div>
      <div class="shopcar-footer">
        <input type="checkbox"><span>合计:<a href="#" @click.prevent style="color: red;">¥{{allprices}}</a></span><span @click="shopcargopay" class="shopcar-pay"><a href="#" @click.prevent style="color: white;">去结算</a></span>
      </div>
    </div>
    <shopcarbefore v-if="shows==1"></shopcarbefore>
    <shopcarafter v-if="shows==2"></shopcarafter>
    <!--<shopcaraddgoods v-if="shows==0"></shopcaraddgoods>-->
    <tabBar :index="3" :allcount="goodscount"></tabBar>
  </div>
</template>
<script>
  import shopcarbefore from "./shopcar-before"
  import shopcarafter from "./shopcar-after"
  import tabBar from '@/components/tabBar'
  import {getItem} from "../../util/cookie";
  import "@/components/login";
  import {getnum,change,deletegoods,shopcardel} from "@/api";
  import bus from '@/util/bus'
  export default {
    name:'shopcar',
    data(){
      return{
        goodslis:[],
        goodscount:0,
        allprices:0,
        shows:'',
        bol:false,
        alerts:''
      }
    },
    created(){
      this.getData();
    },
    components:{
      shopcarbefore,
      shopcarafter,
      tabBar
    },
    methods:{
      sendmsg(v){
        // bus.$emit("userDefinedEvent",v)
        this.$router.push({
          name:'goodsinfor',
          query:{id:v}
        })
      },
      shopcarchange(){
        this.bol=!this.bol
      },
      getData(){
        getnum().then(res=>{
          console.log(res.data.data);
          // console.log();
          if(res.data.data!=null){
          let datas = res.data.data;
            this.goodslis=datas;
            let str=0;
            let allprices=0;
            for (let i = 0; i < datas.length; i++) {
              str+=datas[i].count;
              allprices+=datas[i].goodsprice*1*datas[i].count;
            }
            this.goodscount=str;
            console.log(this.goodscount)
            this.allprices=allprices;
            if(getItem("tokenID")!=undefined && this.goodscount>='1'){
              this.shows=0
            }else if(getItem("tokenID")!=undefined && this.goodscount=="0"){
              this.shows=2
            }else {
              this.shows=1
            }
          }else {
            if(getItem("tokenID")!=undefined){
              this.shows=2
            }
          }
        })
      },
      shopcargopay(){
        // this.$router.push({
        //   name:'orderok',
        //   query:{id:this.id}
        // })
      },
      shopcardel(val){
        for (let i = 0; i < this.goodslis.length; i++) {
          if(this.goodslis[i].path==val){
            if(this.goodslis[i].count>1){
              this.goodslis[i].count--;
              shopcardel({
                datas:JSON.stringify(this.goodslis[i])
              }).then(res=>{
                 this.getData();
              })
              console.log(this.goodslis)
              let allprice=0;
              for (let j = 0; j < this.goodslis.length; j++) {
                allprice+=this.goodslis[j].goodsprice*1*this.goodslis[j].count;
              }
              this.allprices=allprice;
            }else {
              let that=this;
               setTimeout(function(){
                 that.alerts=1
               },0);
              setTimeout(function(){
                that.alerts=2
              },2000)
            }
          }
        }
        console.log(this.goodslis[0]);

      },
      shopcaradd(val){
        for (let i = 0; i < this.goodslis.length; i++) {
          if(this.goodslis[i].path==val){
            this.goodslis[i].count++;
            shopcardel({
              datas:JSON.stringify(this.goodslis[i])
            }).then(res=>{
              this.getData();
            })
            let allprice=0;
            console.log(this.goodslis);
            for (let j = 0; j < this.goodslis.length; j++) {
              allprice+=this.goodslis[j].goodsprice*1*this.goodslis[j].count;
            }
            this.allprices=allprice;
          }
        }
      },
      shopcardelete(val){
        deletegoods({
          id:val
        }).then(res =>{
          this.getData()
        })
      },
      mounted(){
        shopcardelete();
        shopcaradd()
      }


    },
    watch:{
      goodscount(newvalue,oldvalue){
        console.log(getItem('tokenID'));
        console.log(2323232);
      }

    }
  }
</script>
<style>
  .shopcar{
    width: 100%;
    overflow: hidden;
  }
  .shopcaraddgoods-head{
    color: white;
    width: 94%;
    padding: 15px 3%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    top: 0;
    text-align: center;
    background: red;
  }
  .shopcar .shopcar-bus{
    font-size: 16px;
    /*margin-left: 2rem;*/
  }
  .shopcar .shopcar-change{
    font-size: 12px;
    /*float: right;*/
    /*margin-right: 1rem;*/
  }
  .shopcar-goodslis{
    /*position: relative;*/
    width: 96%;
    padding: 5px 2%;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;
  }
  .shopcar-active{
    /*position: relative;*/
    width: 96%;
    padding: 5px 2%;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;
  }
  .shopcar-goods{
    /*position: relative;*/
    width:100%;
    /*padding: 0px 2%;*/
    display: flex;
    justify-content: space-between;
    /*border: solid 1px #ccc;*/
  }
  /*.shopcar .shopcar-descript{*/
  /*border: solid 1px;*/
  /*}*/
  .shopcar .shopcar-descript span{
    display: inline-block;
    padding: 5px 0;
  }
  .shopcar .shopcar-sp1,.shopcar-sp3{
    padding: 2px;
    float: right;
    color: #ccc;
    font-size: 13px;
  }
  .shopcar .shopcar-sp1{
    display: inline-block;
    text-decoration-line: line-through;
  }
  .shopcar .shopcar-sp2{
    color: red;
  }
  .shopcar .shopcarchanges{
    position: absolute;
    right: 0;
    background: white;
    width: 66%;
    padding: 0px 2%;
    display: flex;
    justify-content: space-between;
  }
  .shopcarchanges a{
    text-align: center;
    vertical-align: top;
    border: solid 1px;
    display: inline-block;
    padding: 3px 10px;
  }
  .shopcarchanges .shopcar-count{
    text-align: center;
    width: 30px;
    border: solid 1px;
    height: 22px;
    line-height: 20px;
    font-size: 10px;
  }
  .shopcarchanges #shopcar-select{
    width: 180px;
    padding: 5px;
    margin-top: 7px;
  }
  .shopcar-alert{
    width: 100%;
    position: fixed;
    bottom: 130px;
     text-align: center;
  }
  .shopcar-alert span{
    padding: 0.5rem 3rem;
    color: white;
    background: rgba(0,0,0,0.5);
  }
  .shopcar-footer{
    /*border-top: solid 1px #ccc;*/
    /*border: solid 1px;*/
    background: white;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 65px;
  }
  .shopcar-footer input{
    margin-top: 15px;
  }
  .shopcar-pay{
    background: red;
  }
  .shopcar-footer span{
    /*display: inline-block;*/
    padding: 10px 25px;
  }
  /*.shopcar-head{*/
    /*display: inline-block;*/
    /*text-align: center;*/
    /*width: 100%;*/
    /*padding: 20px 0px;*/
    /*background: red;*/
  /*}*/
  /*.shopcar-login{*/
    /*position: fixed;*/
    /*top: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*text-align: center;*/
  /*}*/
  /*.shopcar-box{*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 30%;*/
    /*transform:translate(-50%,0);*/
  /*}*/
  /*.shopcar-login button{*/
    /*border:solid 1px red;*/
    /*width: 150px;*/
    /*height: 30px;*/
    /*background: white;*/
    /*color: red;*/

  /*}*/
</style>
