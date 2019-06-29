<template>
  <div class="goodsb">
    <div v-for="(goodsaitem,goodsindex) in goodsbdataList" class="goodsb-lis" @click="sendmsg(goodsaitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsaitem.path">-->
        <p><img :src="goodsaitem.imgurl" width="150" height="150"/></p>
        <span class="goodsbdescripts"><a href="#" @click.prevent class="goodsbdescripts-a1">{{goodsaitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsaitem.goodsprice}}</a></span>
      <!--</router-link>-->
    </div>
    <loading v-show="bols"></loading>
  </div>
</template>

<script>
  // import bus from "@/util/bus"
  // import {getallgoods} from "../api";
  import loading from '@/components/loading'
  export default {
    name:"goodsb",
    created(){
      console.log("run")
      this.goodsbgetData()
    },
    data(){
      return{
        goodsbdataList:[],
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
      goodsbgetData:function(){
        this.bols=true
        // getallgoods().then(res => {
        //   this.goodsbdataList = res.data.data2;
        //   console.log("箱包");
        //
        // });
        this.$http({
          method:"get",
          url:"/getallgoods",

        }).then(res => {
          this.goodsbdataList = res.data.data2;
          this.bols=false;
          console.log("箱包");
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
      //   // this.goodsagetData(newvalue)
      // }
    }
  }
</script>

<style>
  /*样式*/
  .goodsb{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goodsb-lis{
    /*padding: 5px;*/
    margin: 5px 15px;
    background: white;
  }
  .goodsb .goodsbdescripts a{
    text-decoration: none;
  }
  .goodsb .goodsbdescripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
