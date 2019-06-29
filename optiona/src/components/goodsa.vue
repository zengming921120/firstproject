<template>
  <div class="goodsa">
    <div v-for="(goodsaitem,goodsindex) in goodsadataList" class="goodsa-lis" @click="sendmsg(goodsaitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsaitem.path">-->
        <p><img :src="goodsaitem.imgurl" width="150" height="150"/></p>
        <span class="goodsadescripts"><a href="#" @click.prevent class="goodsadescripts-a1">{{goodsaitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsaitem.goodsprice}}</a></span>
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
    name:"goodsa",
    created(){
      console.log("run")
      // this.goodsagetData()
    },
    data(){
      return{
        goodsadataList:[],
        bols:''
        // goodsarr:['data','data1','data2','data3','data4','data5','data6','data7','data8','data9'],
        // indexs:this.newindex
      }
    },
    props:{
      // newindex:Number
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

      goodsagetData:function(){
        // getallgoods().then(res => {
        //   this.goodsadataList = res.data.data1;
        //   console.log("服装");
        //
        // });
        this.bols=true;
        this.$http({
          method:"get",
          url:"/getallgoods",

        }).then(res => {
          this.goodsadataList = res.data.data1;
          console.log("服装");
          this.bols=false;
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
    mounted(){
      this.goodsagetData()
    },
    components:{
      loading
    },
    activated(){
    },
    watch:{
      bols(newvalue,oldvalue){
        console.log(newvalue);
        // this.goodsagetData(newvalue)
      }
    }
  }
</script>

<style>
  /*样式*/
  .goodsa{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goodsa-lis{
    /*padding: 5px;*/
    margin: 5px 15px;
    background: white;
  }
  .goodsa .goodsadescripts a{
    text-decoration: none;
  }
  .goodsa .goodsadescripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
