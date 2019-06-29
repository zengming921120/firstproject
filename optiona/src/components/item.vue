<!--<template>-->
  <!--<div class="itemWarp flex_mid" @click='changePage'>-->
		<!--<span v-show='!bol'>-->
			<!--<slot name='normalImg'></slot>-->
		<!--</span>-->
    <!--<span v-show='bol'>-->
			<!--<slot name='activeImg'></slot>-->
		<!--</span>-->
    <!--<span v-text='txt' :class="sel==page?'active':null"></span>-->
  <!--</div>-->
<!--</template>-->
<!--<script type="text/javascript">-->
  <!--export default{-->
    <!--name: 'Item',-->
    <!--props:{-->
      <!--txt:{-->
        <!--type:String-->
      <!--},-->
      <!--page:{-->
        <!--type:String-->
      <!--},-->
      <!--sel:{-->
        <!--type:String-->
      <!--}-->
    <!--},-->
    <!--computed:{-->
      <!--bol: function(){-->
        <!--if(this.sel == this.page){-->
          <!--return true;-->
        <!--}-->
        <!--return false;-->
      <!--}-->
    <!--},-->
    <!--methods:{-->
      <!--changePage(){-->
        <!--//点击跳转对应的页面-->
        <!--this.$emit('change',this.page)-->
        <!--this.$router.push('/'+this.page);-->
      <!--}-->
    <!--},-->
    <!--watch:{-->

    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style type="text/css">-->
  <!--.itemWarp{-->
    <!--flex-grow: 1;-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--justify-content: center;-->
    <!--flex-direction: column;-->
    <!--border-top: 1px solid #eee;-->
  <!--}-->
  <!--.itemWarp span{-->
    <!--font-size: 12px;-->
  <!--}-->
  <!--.active{-->
    <!--color: red;-->
  <!--}-->


<!--</style>-->
