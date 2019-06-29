<template>
  <div class="goodse">
    <div v-for="(goodsitem,goodsindex) in goodsdataList" class="goodse-lis" @click="sendmsg(goodsitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsitem.path">-->
        <p><img :src="goodsitem.imgurl" width="150" height="150"/></p>
        <span class="goodsedescripts"><a href="#" @click.prevent class="goodsedescripts-a1">{{goodsitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsitem.goodsprice}}</a></span>
      <!--</router-link>-->
    </div>
    <loading v-show="bols"></loading>
  </div>
</template>

<script>
  import bus from "@/util/bus"
  // import {getallgoods} from "../api";
  import loading from '@/components/loading'
  export default {
    name:"goodse",
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
        //   this.goodsdataList = res.data.data5;
        //   console.log("日用品");
        // });
        this.bols=true;
        this.$http({
          method:"get",
          url:"/getallgoods",

        }).then(res => {
          this.goodsdataList = res.data.data5;
          this.bols=false;
          console.log("日用品");
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

    }
  }
</script>

<style>
  /*样式*/
  .goodse{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goodse-lis{
    /*padding: 5px;*/
    margin: 5px 15px;
    background: white;
  }
  .goodse .goodsedescripts a{
    text-decoration: none;
  }
  .goodse .goodsedescripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
