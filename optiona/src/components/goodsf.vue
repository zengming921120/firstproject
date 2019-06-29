<template>
  <div class="goodsf">
    <div v-for="(goodsitem,goodsindex) in goodsdataList" class="goodse-lis" @click="sendmsg(goodsitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsitem.path">-->
        <p><img :src="goodsitem.imgurl" width="150" height="150"/></p>
        <span class="goodsfdescripts"><a href="#" @click.prevent class="goodsfdescripts-a1">{{goodsitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsitem.goodsprice}}</a></span>
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
    name:"goodsf",
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
        //   this.goodsdataList = res.data.data6;
        //   console.log("存在");
        // });
        this.bols=true;
        this.$http({
          method:"get",
          url:"/getallgoods",

        }).then(res => {
          this.goodsdataList = res.data.data6;
          this.bols=false;
          console.log("童装");
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
  .goodsf{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goodsf-lis{
    /*padding: 5px;*/
    margin: 5px 15px;
    background: white;
  }
  .goodsf .goodsfdescripts a{
    text-decoration: none;
  }
  .goodsf .goodsfdescripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
