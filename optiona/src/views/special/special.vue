<template>
  <div class="special_box">
    <div class="special-head">专题
      <!--<tab-bar></tab-bar>-->
      <span class="special-logo">
      <router-link to="/goodsSearch"><img :src="imgs" height="18" width="18"/></router-link>
    </span>
    </div>
    <div class="special" ref="special">
      <div>
        <div class="special-content">


          <!--<div class="wrapper">-->

          <div :class="index==0?'special-active':'special-main' " v-for="(item,index) in datas" @click="pullgo">
            <img :src="item.title" style="display: block" width="100%" height="250px">
            <div class="special-top" >
              <nav>
         <span v-for="val in item.lists" class="shoplb">
           <img :src="val.src" width="30%" height="100px">
           <p><a href="#" class="special-descript" @click.prevent>{{val.descripts}}</a><br/><a href="#" @click.prevent style="color: red;">¥{{val.price}}</a></p>
         </span>
              </nav>
            </div>
          </div>
          <!--</div>-->
          <loading v-if="bols"></loading>
        </div>
      </div>
      <tabBar :index="1" :allcount="goodscount"></tabBar>
    </div>
  </div>
</template>
<script>
  import tabBar from '@/components/tabBar'
  import loading from '@/components/loading'
  import {getspecialgoods,getnum} from "../../api";
  import BScroll from 'better-scroll';
  export default {
  name:"special",
    data(){
      return{
        goodscount:'',
        imgs:require('./imgs/search.png'),
        datas:[],
        bols:''
      }
    },
  created(){
    this.getData();
    this.getDatas()
  },

  components:{
    loading,
    tabBar
  },
    mounted(){

    },
  methods:{
    getDatas(){
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
    getData:function(){
      this.bols=true;
      getspecialgoods().then(res => {
        this.datas = this.datas.concat(res.data.datas);
        this.bols=false;

        console.log("专题");
        console.log(this.$refs);
        this.$nextTick(()=>{
          // if(!this.scroll){
          //
          // }
          let bs = new BScroll(this.$refs.special,{
            click:true,
            scrollY:true,
            pullUpLoad:true
          });
          bs.on('pullingUp',()=>{
            getspecialgoods().then(res=>{
              this.datas=this.datas.concat(res.data.datas);
              this.$nextTick(()=>{
                bs.finishPullUp();
                bs.refresh()
              })
            })
          })

        })

      });
    //   // getspecialgoods().then(res => {
    //   //   console.log(res.data.datas);
    //   //   this.datas = res.data.datas;
    //   //   console.log("专题");
    //   // });
    //   if(!this.$refs.specials) {
    //     this.$http({
    //       method:"get",
    //       url:"/getspecialgoods",
    //     }).then(res=>{
    //       this.bols=false;
    //       this.datas=res.data.datas;
    //     });
    //   }else {
    //   console.log(this.$refs.specials);
    //
    //
    //   this.$http({
    //     method:"get",
    //     url:"/getspecialgoods",
    //
    //   }).then(res => {
    //     console.log(34343434);
    //     this.datas = this.datas.concat(res.data.datas);
    //     this.bols=false;
    //     console.log("专题");
    //
    //   });
    //
    //   }
    },

    pullgo(){
      this.$router.push('/myscroll')
    }
  },
    // props: {
    //   /**
    //    * 1 滚动的时候会派发scroll事件，会截流。
    //    * 2 滚动的时候实时派发scroll事件，不会截流。
    //    * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
    //    */
    //   probeType: {
    //     type: Number,
    //     default: 3
    //   },
    //   /**
    //    * 点击列表是否派发click事件
    //    */
    //   click: {
    //     type: Boolean,
    //     default: true
    //   },
    //   /**
    //    * 是否开启横向滚动
    //    */
    //   scrollX: {
    //     type: Boolean,
    //     default: false
    //   },
    //   /**
    //    * 是否派发滚动事件
    //    */
    //   listenScroll: {
    //     type: Boolean,
    //     default: false
    //   },
    //   /**
    //    * 列表的数据
    //    */
    //   data: {
    //     type: Array,
    //     default: null
    //   },
    //   /**
    //    * 是否派发滚动到底部的事件，用于上拉加载
    //    */
    //   pullup: {
    //     type: Boolean,
    //     default: true
    //   },
    //   /**
    //    * 是否派发顶部下拉的事件，用于下拉刷新
    //    */
    //   pulldown: {
    //     type: Boolean,
    //     default: true
    //   },
    //   /**
    //    * 是否派发列表滚动开始的事件
    //    */
    //   beforeScroll: {
    //     type: Boolean,
    //     default: false
    //   },
    //   /**
    //    * 当数据更新后，刷新scroll的延时。
    //    */
    //   refreshDelay: {
    //     type: Number,
    //     default: 20
    //   }
    // },
  mounted() {
    // this.getData()
  }

}
</script>
<style>
  /** {*/
    /*margin: 0px;*/
    /*padding: 0px;*/
  /*}*/
  .special_box{
    height: 100%;}
  .special{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .special .special-content{
    width: 100%;
    /*margin-top: 50px;*/
  }
  .special-head{
    top: 0;
    z-index: 200;
    text-align: center;
    width: 100%;
    padding: 15px 0px;
    background: red;
    color: white;
    font-size: 18px;
    position: fixed;
    top: 0;
  }
  .special-head .special-logo{
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
  }
  .special-main{
    width: 100%;
  }
  .special-active{
    width: 100%;
    margin-top: 0px;

  }
  .special-top{
    display: flex;
    text-align: center;
  }
  .special-descript{
    display: inline-block;
    width: 80%;
    text-decoration: none;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #000;
  }
  nav{
    display: flex;
    overflow:auto;
    text-align: center;
  }
  /*.shoplb{*/
    /*width: 100%;*/
    /*height: 100px;*/
  /*}*/
</style>
