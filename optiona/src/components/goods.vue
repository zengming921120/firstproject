<template>
  <div class="goods">
    <div v-for="(goodsitem,goodsindex) in goodsdataList" class="goods-lis" @click="sendmsg(goodsitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsitem.path">-->
      <p><img :src="goodsitem.imgurl" width="150" height="150"/></p>
      <span class="descripts"><a href="#" @click.prevent class="descripts-a1">{{goodsitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsitem.goodsprice}}</a></span>
      <!--</router-link>-->
    </div>
  </div>
</template>

<script>
  // import {getallgoods} from "../api";
  import axios from "axios";
  import qs from "qs";
  export default {
    name:"goods",
    created(){
      this.goodsgetData()
    },
    data(){
      return{
        goodsdataList:[],
        // goodsarr:['data','data1','data2','data3','data4','data5','data6','data7','data8','data9'],
        // indexs:this.newindex
      }
    },
    props:{
    },

    computed:{
      // bol: function(){
      //   if(this.sels == this.newindex){
      //     return true;
      //   }
      //   return false;
      // }
    },
    methods:{
      goodsgetData:function(){
        // getallgoods().then(res => {
        //   this.goodsdataList = res.data.data;
        //   console.log("推荐");
        //
        // });
        this.$http({
          method:"get",
          url:"/getallgoods",

         }).then(res => {
              this.goodsdataList = res.data.data;
              console.log("推荐");
          // this.$nextTick(()=>{
          //   let bs=new BScroll(this.$refs.goods,{
          //     pullUpLoad:true
          //   });
          //   bs.on("pullingUp",() =>{
          //     console.log("上拉加载")
          //     this.$http({
          //       method:"get",
          //       url:"/getallgoods",
          //
          //     }).then(res =>{
          //       this.goodsdataList = this.goodsdataList.concat(res.data.data);
          //       this.$nextTick(()=>{
          //         bs.finishPullUp();
          //         bs.refresh()
          //       })
          //     })
          //   })
          // })
            });

      },
      sendmsg(v){
        this.$router.push({
          name:'goodsinfor',
          query:{id:v}
        })
      }

    },
    activated(){

    },
    watch:{
      // newindex(newvalue,oldvalue){
      //   console.log(newvalue);
      //   this.goodsgetData(newvalue)
      // }
    }
  }
</script>

<style>
  /*样式*/
  .goods{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goods-lis{
    margin: 5px 15px;
    background: white;
  }
  .goods .descripts a{
    text-decoration: none;
  }
  .goods .descripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
