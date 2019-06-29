<template>
  <div class="goodsc">
    <div v-for="(goodsitem,goodsindex) in goodsdataList" class="goodsc-lis" @click="sendmsg(goodsitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsitem.path">-->
        <p><img :src="goodsitem.imgurl" width="150" height="150"/></p>
        <span class="goodscdescripts"><a href="#" @click.prevent class="goodscdescripts-a1">{{goodsitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsitem.goodsprice}}</a></span>
      <!--</router-link>-->
    </div>
    <loading v-show="bols"></loading>
  </div>
</template>

<script>
  // import bus from "@/util/bus"
  // import {getallgoods} from "../api";
  import loading from '@/components/loading'
  import axios from "axios";
  import qs from "qs";
  export default {
    name:"goodsc",
    created(){
      console.log("run")
      this.goodsgetData()
    },
    data(){
      return{
        goodsdataList:[],
        bols:''
        // goodsarr:['data','data1','data2','data3','data4','data5','data6','data7','data8','data9'],
        // indexs:this.newindex
      }
    },
    props:{
      // newindex:Number
    },
    components:{
      loading
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
        //   this.goodsdataList = res.data.data3;
        //   console.log("鞋履");
        //
        // });
        this.bols=true;
        this.$http({
          method:"get",
          url:"/getallgoods",

        }).then(res => {
          this.goodsdataList = res.data.data3;
          this.bols=false;
          console.log("鞋履");
        });
      },
      sendmsg(v){
        // bus.$emit("userDefinedEvent",v)
        this.$router.push({
          name:'goodsinfor',
          query:{id:v}
        })
      }

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
  .goodsc{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goodsc-lis{
    /*padding: 5px;*/
    margin: 5px 15px;
    background: white;
  }
  .goodsc .goodscdescripts a{
    text-decoration: none;
  }
  .goodsc .goodscdescripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
