<template>
  <div class="tabberWarp" >
    <div class="warp" v-for='(item,index1) in tabbarDes'>
      <router-link :to="'/'+item.page">

        <div class="tabberWarp-lis">
         <img :src="item.normalImg" v-show="index!=index1">
         <img :src="item.activeImg" v-show="index==index1"><span class="tabberWarp-count" v-if="index1==3">{{allcount}}</span>
         <p :class="index==index1?'active':null">{{item.txt}}</p>
        </div>

      </router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
  // import Item from './Item.vue'
  // import home from "../views/home/home";


  export default{
    name:'tabbar',
    props:["index","allcount"],
    created(){
      console.log(this)

    },
    components:{

    },
    data:function(){
      return{
        selected:'home',
        bol:true,
        tabbarDes:[
          {
            txt:'首页',
            page:'home',
            normalImg:require('../assets/imgs/home.png'),
            activeImg:require('../assets/imgs/home-icon.png')

          },
          {
            txt:'专题',
            page:'special',
            normalImg:require('../assets/imgs/special.png'),
            activeImg:require('../assets/imgs/special-icon.png')
          },
          {
            txt:'品牌汇',
            page:'sort',
            normalImg:require('../assets/imgs/sort.png'),
            activeImg:require('../assets/imgs/sort-icon.png')
          },
          {
            txt:'购物车',
            page:'shopcar',
            normalImg:require('../assets/imgs/shopcar.png'),
            activeImg:require('../assets/imgs/shopcar-icon.png')
          },
          {
            txt:'我的',
            page:'my',
            normalImg:require('../assets/imgs/my.png'),
            activeImg:require('../assets/imgs/my-icon.png')

          }
        ]
      }
    },
    mounted(){

    },
    computed:{
      // bol: function(){
      //   if(this.selected == this.page){
      //     return true;
      //   }
      //   return false;
      // }
    },
    methods:{

    },
    watch:{
       // selected(newval,oldval){
       //   this.changepage(newval);
       //   // console.log(newval)
       //   console.log(1111111)
       // }
    }
  }
</script>
<style type="text/css">
  .warp{
    width: 100%;
    background: #fff;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
  }
  .tabberWarp-lis{
    position: relative;
    width: 100%;
  }
  .warp img{
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }
  .tabberWarp-count{
    color: white;
    position: absolute;
    top: 10px;
    right: 8px;
    border-radius: 100%;
    padding: 3px 5px;
    background: red;
    display: inline-block;
  }
  .tabberWarp{
    display: flex;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
  .warp a{
    color: #000;
  }
  .active{
    color: red;
  }
</style>
