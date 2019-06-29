<template>
  <div class="goodsd">
    <div v-for="(goodsitem,goodsindex) in goodsdataList" class="goodsd-lis" @click="sendmsg(goodsitem.path)">
      <!--<router-link :to="'/goodsinfor/'+goodsitem.path">-->
        <p><img :src="goodsitem.imgurl" width="150" height="150"/></p>
        <span class="goodsddescripts"><a href="#" @click.prevent class="goodsddescripts-a1">{{goodsitem.goodsdescript}}</a><br/><a href="#" style="color: red;" @click.prevent>¥{{goodsitem.goodsprice}}</a></span>
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
    name:"goodsd",
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
        //   this.goodsdataList = res.data.data4;
        //   console.log("推荐");
        // })
        this.bols=true;
        this.$http({
          method:"get",
          url:"/getallgoods",

        }).then(res => {
          this.goodsdataList = res.data.data4;
          this.bols=false;
          console.log("配饰");
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
      // getallgoods().catch(err =>{
      //   if(axios.isCancel(err)){
      //     console.log('请求被关闭了')
      //   }else {
      //     console.log('请求出问题了')
      //   }
      // });
    },
    watch:{

    }
  }
</script>

<style>
  /*样式*/
  .goodsd{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .goodsd-lis{
    /*padding: 5px;*/
    margin: 5px 15px;
    background: white;
  }
  .goodse .goodsedescripts a{
    text-decoration: none;
  }
  .goodsd .goodsddescripts-a1{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
