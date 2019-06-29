<template>
  <div id="home">
    <!--<pull  ref="myScroll" :page="page" :on-refresh="onRefresh" :on-pull="onPull"  :get-scroll-top="getTop">-->
  <!--<tab-bar></tab-bar>-->
   <div class="home-top">
    <search></search>
   </div>

      <div id="home-app">
        <nav>
          <p @click="toggle($index)"  :class="{homeactive:$index==homeactive}" v-for="(homeitem,$index) in homelists">{{homeitem.title}}</p>
        </nav>
      </div>
    <div class="home-banner" ref="box">
      <lb v-if="homeactive==0"></lb>
      <shopingspree v-if="homeactive==0"></shopingspree>

      <div class="home-goods">
        <h4 v-if="homeactive==0">商品区</h4>
        <!--<keep-alive>-->
          <goods v-if="homeactive==0"></goods>
          <goodsa v-if="homeactive==1"></goodsa>
          <goodsb v-if="homeactive==2"></goodsb>
          <goodsc v-if="homeactive==3"></goodsc>
          <goodsd v-if="homeactive==4"></goodsd>
          <goodse v-if="homeactive==5"></goodse>
          <goodsf v-if="homeactive==6"></goodsf>
        <!--</keep-alive>-->
      </div>
    </div>
      <div v-if="homeactive==0" style="margin-top: 80px"><p style="color: #000;">{{goodscount}}我的奇偶的风景欧迪芬</p></div>
    <tabBar  :index="0" :allcount="goodscount"></tabBar>
    <!--<router-view></router-view>-->
      <!--</pull>-->
  </div>
</template>
<script>
import search from './search'
import lb from './home-swiper'
import shopingspree from '@/components/shopspree'
import goods from '@/components/goods'
import goodsa from '@/components/goodsa'
import goodsb from '@/components/goodsb'
import goodsc from '@/components/goodsc'
import goodsd from '@/components/goodsd'
import goodse from '@/components/goodse'
import goodsf from '@/components/goodsf'
import {getnum} from "../../api";
// import pull from '@/components/pull.vue'
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import tabBar from '@/components/tabBar'
  export default {
    data(){
      return{
        homeactive:0,
        goodscount:0,
        homelists:[{
          title:'推荐',
            id:0,
        },{
          title:'服装',
          id:1
        },{
          title:'箱包',
          id:2
        },{
          title:'鞋履',
          id:3
        },{
          title:'配饰',
          id:4
        },{
          title:'日用品',
          id:5
        },{
          title:'童装',
          id:6
        },{
          title:'童鞋',
          id:7
        },{
          title:'儿童用品',
          id:8
        }],
      }
    },
    methods:{
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
      toggle(index){
        this.homeactive=index;
        console.log(this.goodscount)
        console.log(this.homeactive);

      }
    },
      components:{
        tabBar,
        search,
        lb,
        shopingspree,
        goods,
        goodsa,
        goodsb,
        goodsc,
        goodsd,
        goodse,
        goodsf,
      },
    created() {
      this.getData()
        // console.log(this.homeactive)
    },
    activated() {

    }
  }
</script>
<style>
  #home{
    width: 100%;
    height: 100%;

  }
  .home-top{
    position: fixed;
    z-index: 100;
    top: 0;
    text-align: center;
    width: 100%;
    padding: 10px 0px;
    background: red;
  }
  /*.content{*/
    /*!*width: 100%;*!*/
    /*display: flex;*/
  /*}*/
  /*.list-nav .lis{*/
    /*display: inline-block;*/
    /*border: solid 1px;*/
  /*}*/
  /*.list-nav{*/
    /*width: 100%;*/
  /*}*/


  #home-app{
    position: fixed;
    top: 60px;
    z-index: 100;
    width: 100%;
    overflow:hidden;
    background: white;

  }
  #home-app nav{
    /*padding: 0 10px;*/

    display: flex;
    overflow: auto;
  }
  #home-app p{
    text-align: center;
    font-size: 14px;
    /*-ms-flex-negative: 0;*/
    flex-shrink: 0;
    padding: 8px;
    margin: 5px;

  }
  #home-app .homeactive{
    color: red;
  }
  .home-banner{

    margin-top: 120px;
  }
  .home-goods{
    background: #eee;
    margin-bottom: 60px;
  }
  /*.home .warp-nav .title{*/
    /*display: inline-block;*/
  /*}*/

</style>
