<template>
  <div class="goodsSearch">
  <div class="goodsSearch-header">
    <div class="goodsSearch-warps">
      <span ><img :src="list[0].src" /></span><input v-model="values" @input="goodssearchs" type="text" placeholder="搜索内容">
    </div>
    <div @click="$router.go(-1)" class="mesage">
      取消
    </div>
  </div>
    <div :class="index==0?'goodsSearch-goodslisactive':'goodsSearch-goodslis'" v-for="(item,index) in searchgoodslis" :id="index==(searchgoodslis.length-1)?'actived':null">
      <span><img :src="item.imgurl" width="100" height="100"></span>
      <span><span class="sp1">{{item.goodsdescript}}</span><br/><span><a href="#" @click.prevent>¥{{item.goodsprice}}</a><a href="#" @click.prevent>¥xxxx</a></span></span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'goodsSearch',
    data(){
      return{
        list:[{src:require('./imgs/搜索.png')}],
        searchgoodslis:[]
      }
    },
    methods:{
      goodssearchs(){
        let self = this;
        this.$http({
          method:"get",
          url:"/getsearchgoods",
        }).then(res => {
          let result = res.data;
          let searcharr=[];
          console.log(result);
            for (let i = 0; i < result.data.length; i++) {

              if(result.data[i].goodsdescript.indexOf(self.values)!=-1 && (self.value)!='') {
                // console.log(result.data[i].goodsdescript);
                     searcharr.push(result.data[i])
              }
            }
          console.log(searcharr);
            this.searchgoodslis=searcharr;
        });
      }
      // gosearch(){
      //   this.$router.push("/goodsSerarc")
      // }
    }
  }

</script>
<style>
  .goodsSearch{
    width: 100%;
    overflow: hidden;
  }
  .goodsSearch-header{
    background: red;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 100;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    padding: 15px 0;
  }
  #actived{
    margin-bottom: 100px;
  }
  .goodsSearch-goodslisactive{
    border-bottom: solid 1px #ccc;
    width: 94%;
    padding: 0px 3%;
    display: flex;
    margin-top: 80px;
  }
  .goodsSearch-goodslis{
    border-bottom: solid 1px #ccc;
    width: 94%;
    padding: 0px 3%;
    display: flex;
  }
  .goodsSearch .sp1{
    display: inline-block;
    margin-top: 30px;
  }
  .goodsSearch-warps{
    margin-left: 25px;
    padding-top: 5px;
    height: 33px;
    border: solid 1px;
    background: white;
    border-radius: 10px;
  }
  .goodsSearch-warps input{
    outline: none;
    border: none;
    vertical-align: top;
    width: 250px;
    height: 25px;
  }
  .goodsSearch .warps span{
    display: inline-block;
    width: 30px;
    height: 30px;
  }
  .goodsSearch .mesage{
    width: 10%;
    color: white;
  }

</style>
