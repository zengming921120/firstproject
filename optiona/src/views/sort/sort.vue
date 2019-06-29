<template>
  <div class="sort">
  <div class="sort-head">品牌汇
    <!--<tab-bar></tab-bar>-->
    <span>
      <router-link to="/goodsSearch"><img :src="sortimgs" height="18" width="18"/></router-link>
    </span>
  </div>
    <div class="sortlogo">

  <span class="sort-logo" v-for="(sortitem,sortindex) in sortdataList">
    <router-link :to="'/sort/'+sortindex"><img :src="sortitem.logos" width="46%" height="200rem"></router-link>
  </span>
    </div>
    <loading v-if="bols"></loading>
    <tabBar :index="2" :allcount="goodscount"></tabBar>
  </div>
</template>
<script>
  import tabBar from '@/components/tabBar'
  import loading from '@/components/loading'
  import {getnum} from "../../api";
  // import {getsortgoods} from "../../api";

  export default {
    created(){
      this.sortgetData();
      this.getData()
    },
    data(){
      return{
        goodscount:'',
        sortimgs:require('./imgs/search.png'),
        sortdataList:[],
        bols:''
      }
    },
    components:{
      loading,
      tabBar
    },
    methods: {
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
      sortgetData:function(){
      this.bols=true
        // getsortgoods().then(res => {
        //   this.sortdataList = res.data.datas;
        //   console.log("分类");
        // })
        this.$http({
          method:"get",
          url:"/getsortgoods",
        }).then(res => {
          this.bols=false;
          this.sortdataList = res.data.datas;
          console.log("分类");
        });
      }
      // sortgetdatas:function (){
      //    this.$http.get("static/sort.json").then(res => {
      //      var result = res.data;
      //      console.log(result);
      //      this.sortdataList=result.datas
      //      // this.sortgetdatas()
      //      console.log('分类')
      //    })
      // }
    },
    mounted() {
      // this.sortgetdatas()
    }
  }
</script>
<style>
  .sort{
    width: 100%;
    overflow: hidden;
  }
  .sort-head{
    position: fixed;
    top: 0px;
    z-index: 100;
    text-align: center;
    padding: 15px 0px;
    /*margin-bottom: 10px;*/
    width: 100%;
    background: red;
    color: white;
  }
  .sort-head span{
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
  }
  .sortlogo{
    margin-top: 60px;
    text-align: center;
  }
  .sort-logo{
    margin: 5px;
  }
</style>
