<!--&lt;!&ndash;<template>&ndash;&gt;-->
  <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<group-title>&ndash;&gt;-->
      <!--&lt;!&ndash;Pull up&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="pull-right">&ndash;&gt;-->
        <!--&lt;!&ndash;status:{{bottomAllLoaded ? 'all loaded':bottomStatus}}&ndash;&gt;-->
      <!--&lt;!&ndash;</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</group-title>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="loadmore-wrapper">&ndash;&gt;-->
      <!--&lt;!&ndash;<loadmore :bottomMethod="loadBottom" :bottomAllLoaded="bottomAllLoaded" @bottomStatusChanged="statusChangeHandle" ref="loadmore">&ndash;&gt;-->
        <!--&lt;!&ndash;<ul class="loadmore-list">&ndash;&gt;-->
          <!--&lt;!&ndash;<li v-for="item in list" class="loadmore-item">{{item}}</li>&ndash;&gt;-->
        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
      <!--&lt;!&ndash;</loadmore>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->
<!--&lt;!&ndash;<script>&ndash;&gt;-->
  <!--&lt;!&ndash;// import Vue from 'vue';&ndash;&gt;-->


  <!--&lt;!&ndash;import VueImpression from 'vue-impression';&ndash;&gt;-->

  <!--&lt;!&ndash;Vue.use(VueImpression);&ndash;&gt;-->
  <!--&lt;!&ndash;export default {&ndash;&gt;-->
    <!--&lt;!&ndash;data(){&ndash;&gt;-->
      <!--&lt;!&ndash;return {&ndash;&gt;-->
        <!--&lt;!&ndash;list:[],&ndash;&gt;-->
        <!--&lt;!&ndash;bottomStatus:'',&ndash;&gt;-->
        <!--&lt;!&ndash;botttomAllLoaded:false&ndash;&gt;-->
      <!--&lt;!&ndash;};&ndash;&gt;-->

    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;methods:{&ndash;&gt;-->
      <!--&lt;!&ndash;loadBottom(){&ndash;&gt;-->
        <!--&lt;!&ndash;setTimeout(() =>{&ndash;&gt;-->
          <!--&lt;!&ndash;let lastValue = this.list[this.list.length - 1];&ndash;&gt;-->
          <!--&lt;!&ndash;if(lastValue < 40){&ndash;&gt;-->
            <!--&lt;!&ndash;for (let i = 0; i <=10; i += 1) {&ndash;&gt;-->
              <!--&lt;!&ndash;this.list.push(lastValue + i);&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;if(this.list[this.list.length - 1] === 40) this.bottomAllLoaded = true;&ndash;&gt;-->
          <!--&lt;!&ndash;this.$refs.loadmore.onBottomLoaded();&ndash;&gt;-->
        <!--&lt;!&ndash;},1500)&ndash;&gt;-->
      <!--&lt;!&ndash;},&ndash;&gt;-->
      <!--&lt;!&ndash;statusChangeHandle(status){&ndash;&gt;-->
        <!--&lt;!&ndash;this.bottomStatus=status;&ndash;&gt;-->

      <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;beforeCreate() {&ndash;&gt;-->
      <!--&lt;!&ndash;document.documentElement.scrollTop = 0;&ndash;&gt;-->
      <!--&lt;!&ndash;document.body.scrollTop = 0;&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;created() {&ndash;&gt;-->
      <!--&lt;!&ndash;for (let i = 0; i <= 20; i+=1) {&ndash;&gt;-->
        <!--&lt;!&ndash;this.list.push(i);&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->
<!--&lt;!&ndash;<style lang="scss" scoped>&ndash;&gt;-->
  <!--&lt;!&ndash;import 'vue-impression/dist/styles/index.scss';&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
<!--<template>-->

  <!--<div class="my-scroll" :class="[scrollState?'prohibit':'allow']" ref="myScroll" @scroll.passive="onScroll($event)" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)"  >-->
    <!--<div class="scroll-top" :style="{height:top+'px'}">-->
      <!--<div v-if="aspect==2">-->
        <!--<p v-if="state==6">-->
          <!--下拉刷新-->
        <!--</p>-->
        <!--<p v-if="state==1">-->
          <!--<i><img :src="Load"/></i>-->
          <!--<br/>-->
          <!--刷新中-->
        <!--</p>-->
        <!--<p v-if="state==2">松开刷新</p>-->
        <!--<p v-if="state==3">-->
          <!--<i><img :src="Load"/></i>-->
          <!--<br/>-->
          <!--刷新完成-->
        <!--</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash; top &ndash;&gt;-->
    <!--<div class="scroll-list" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)'}">-->
      <!--<slot name='scrollList'></slot>-->
      <!--<div class="scroll-bottom">-->
        <!--<div v-if="state==4">加载中</div>-->
        <!--<div v-if="state==5">加载完成</div>-->
        <!--<div v-if="state==7">没有更多</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script type="text/javascript">-->
  <!--// import tween from '@/plugins/tween'-->
  <!--import Load from '@/assets/imgs/sort.png'-->
  <!--export default {-->
    <!--name:'pull',-->
    <!--props:{-->
      <!--'page':{-->
        <!--type:Object,  //counter:当前页  pageStart:开始页数  pageEnd:结束页数  total:总页数-->
      <!--},-->
      <!--'onRefresh':{ //刷新回调-->
        <!--type:Function,-->
        <!--require:true-->
      <!--},-->
      <!--'onPull':{ //加载回调-->
        <!--type:Function,-->
        <!--require:true-->
      <!--},-->
      <!--'getScrollTop':{ //获取滚动条位置-->
        <!--type:Function-->
      <!--},-->
      <!--'setScrollPage':{ //改变滚动条位置-->
        <!--type:Function-->
      <!--},-->
      <!--'scrollState':{//是否可滑动-->
        <!--type:Boolean,-->
        <!--require:true-->
      <!--}-->
    <!--},-->
    <!--data(){-->
      <!--return {-->
        <!--Load,-->
        <!--pageX:0,-->
        <!--pageY:0,-->
        <!--state:0,-->
        <!--scrollPosition:0,-->
        <!--myScroll:null,-->
        <!--myScrollList:null,-->
        <!--top:0,-->
        <!--aspect:0, //1:向下 2:向上-->
        <!--listHeight:0,-->
      <!--}-->
    <!--},-->
    <!--created(){-->
    <!--},-->
    <!--methods:{-->
      <!--ScrollTop(top){ //修改滚动条位置-->
        <!--this.myScroll.scrollTop = top-->
      <!--},-->
      <!--/*-->
       <!--* 刷新中：1-->
       <!--* 松开刷新：2-->
       <!--* 刷新完成：3-->
       <!--* 加载中：4-->
       <!--* 加载完成：5-->
       <!--* 下拉刷新：6-->
       <!--* 没有更多：7-->
       <!--*/-->
      <!--setState(index){ //修改状态-->
        <!--this.state = index-->
        <!--if(index == 5||index == 3){-->
          <!--setTimeout(()=>{-->
            <!--this.state = 0-->
            <!--let timer = null;-->
            <!--let that = this;-->
            <!--var b=50,c=100,d=100,t=0;-->
            <!--cancelAnimationFrame(timer);-->
            <!--timer = requestAnimationFrame(function fn() {-->
              <!--var oTop = that.top;-->
              <!--if (that.top>0) {-->
                <!--that.top = Math.ceil(tween.Quart.easeInOut(10,oTop,8,10)) - 15-->
                <!--timer = requestAnimationFrame(fn);-->
              <!--} else {-->
                <!--cancelAnimationFrame(timer);-->
                <!--that.top = 0-->
              <!--}-->
            <!--});-->
          <!--},500)-->
        <!--}-->
      <!--},-->
      <!--touchStart(e){ //触摸事件-->
        <!--this.pageX = e.targetTouches[0].pageX-->
        <!--this.pageY = e.targetTouches[0].pageY-->
      <!--},-->
      <!--touchMove(e){ //触摸滑动事件-->
        <!--this.scrollPosition = this.myScroll.scrollTop //获取滚动条位置-->
        <!--if(this.scrollState&&e.targetTouches[0].pageY>this.pageY){ //向上滑动-->
          <!--this.aspect = 2-->
          <!--if(this.myScroll.scrollTop==0){-->
            <!--let diff = e.targetTouches[0].pageY - this.pageY - this.scrollPosition-->
            <!--this.top = Math.pow(diff, 0.9)-->
            <!--let ranget = diff/document.body.clientHeight*100 //计算在屏幕上滑动了多少-->
            <!--if(ranget > 20){-->
              <!--this.state = 2-->
            <!--}else if(ranget < 15){-->
              <!--this.state = 6-->
            <!--}-->
            <!--e.preventDefault()-->
          <!--}-->
        <!--}else if(this.scrollState&&this.state!=4){ //向上滑动-->
          <!--this.aspect = 1-->
        <!--}-->

      <!--},-->
      <!--touchEnd(e){-->
        <!--if(this.aspect == 2&&this.state == 2||this.state == 1){ //上拉处理-->
          <!--this.top = 100-->
          <!--this.state = 1-->
          <!--this.topCallback()-->
        <!--}else if(this.aspect == 2){-->
          <!--this.state = 0-->
          <!--this.top = 0-->
        <!--}-->
      <!--},-->
      <!--onScroll(e){-->
        <!--let listHeight = this.myScrollList.offsetHeight //列表总高度-->
        <!--let listScrollTop = e.target.scrollTop + this.myScroll.offsetHeight //当前滚动条位置-->

        <!--if(this.state == 0&&listHeight-listScrollTop < 100){-->
          <!--this.bottomCallback()-->
        <!--}-->

        <!--if(this.getScrollTop)this.getScrollTop(e.target.scrollTop) //返回X，Y-->
      <!--},-->
      <!--topCallback(){ //刷新回调-->
        <!--this.onRefresh(this.state)-->
      <!--},-->
      <!--bottomCallback(){ //加载回调-->
        <!--if(this.state != 7){-->
          <!--this.state = 4-->
          <!--this.onPull(this.state)-->
        <!--}-->

      <!--},-->
    <!--},-->
    <!--mounted(){-->
      <!--this.myScroll = this.$refs.myScroll //获取滑条dom-->
      <!--this.myScrollList = this.myScroll.children[1] //获取列表dom-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style>-->
  <!--.allow{-->
    <!--overflow:hidden;-->
    <!--height: auto;-->
  <!--}-->
  <!--.prohibit{-->
    <!--max-width: 100%;-->
    <!--max-height: 100%;-->
    <!--height: 100%;-->
    <!--overflow:hidden;-->
    <!--overflow-y: scroll;-->
    <!-- -webkit-overflow-scrolling: touch;-->
    <!--will-change: transform;-->
    <!--transition: all 450ms;-->
    <!--backface-visibility: hidden;-->
    <!--perspective: 1000;-->
    <!-- -webkit-perspective: 1000;-->
  <!--}-->
  <!--.my-scroll{-->
    <!--position: relative;-->
    <!--color: #fff;-->
  <!--}-->
    <!--.my-scroll .scroll-top{-->
      <!--text-align: center;-->
      <!--display:flex;-->
      <!--position:absolute;-->
      <!--top:0;-->
      <!--left:0;-->
      <!--width:100%;-->
      <!--overflow: hidden;-->
    <!--}-->
      <!--.my-scroll .scroll-top div{-->
        <!--display:flex;-->
        <!--height:auto;-->
        <!--width:100%;-->
        <!--justify-content: center;-->
        <!--align-items:center;-->
        <!--flex-wrap: wrap;-->
      <!--}-->
        <!--.my-scroll .scroll-top div i{-->
          <!--flex:1 0 100%;-->
          <!--display:block;-->
          <!--height: 0.4rem;-->
        <!--}-->
        <!--.my-scroll .scroll-top div img{-->
          <!--width:0.6rem;-->
        <!--}-->
        <!--.my-scroll .scroll-top div p{-->
          <!--flex:1 0 100%;-->
        <!--}-->
    <!--.my-scroll .scroll-list{-->
      <!--overflow:hidden;-->
      <!--min-height: 100%;-->
    <!--}-->
    <!--.my-scroll .scroll-bottom{-->
      <!--text-align: center;-->
      <!--line-height: 40px;-->
    <!--}-->
<!--</style>-->
<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="item in data">{{item}}</li>
    </ul>
    <div class="loading-wrapper"></div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData() {
        requestData().then((res) => {
          this.data = res.data.concat(this.data)
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapper, {})
              this.scroll.on('touchend', (pos) => {
                // 下拉动作
                if (pos.y > 50) {
                  this.loadData()
                }
              })
            } else {
              this.scroll.refresh()
            }
          })
        })
      }
    }
  }
</script>
