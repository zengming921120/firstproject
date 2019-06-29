<template>
  <swiper :options="swiperOption" class="swipers">
      <swiper-slide v-for="(item,index) in lists[0].image">
         <!--<router-link :to="'/home'+item.path+index">-->
          <img :src="item.src" class="pic"  @click="send(index)"/>
         <!--</router-link>-->
      </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  //在全局没引入，这里记得要！
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
  data() {
    return{
      lists:[{
        image: [{
          src: require('./imgs/lb0912270.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912271.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912272.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912273.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912274.jpg'),
          path:'/goodslist'
        }, {
          src: require('./imgs/lb0912275.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912276.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912277.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912278.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb0912279.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122700.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122701.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122702.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122703.jpg'),
          path:'/goodslist'
        }, {
          src: require('./imgs/lb09122704.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122705.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122706.jpg'),
          path:'/goodslist/'
        }, {
          src: require('./imgs/lb09122707.jpg'),
          path:'/goodslist/'
        }]
      }],
      swiperOption: {
        loop : true,
        autoplay:true,
        pagination: {  //分页器
          el: '.swiper-pagination',
        }
      }

    }
  },
  methods:{
    send(v){
      this.$router.push({
        name:'homegoods',
        query:{id:v}
      })
    }
     // send(v){
     //   this.$router.push('/homegoods/'+v)
     // }
  },
      // computed:{
      //   swiper(){
      //     return this.$refs.mySwiper.swiper
      //   }
      // },
}
</script>
<style>
  .swipers{
    width: 100%;
  }
  .pic{
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: red;
  }
  .swiper-pagination{
    /*background: red;*/
  }
</style>
