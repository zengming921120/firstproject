<template>
  <div id="app">
    <router-view></router-view>
    <!--<tabBar></tabBar>-->
  </div>
</template>

<script>
  import tabBar from '@/components/tabBar'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created:function () {
    // this.$router.push('/home')
  },
  components:{
    tabBar
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
body,html,#app{
  width: 100%;
  height: 100%;
}
  a{
    text-decoration: none;

  }
</style>
