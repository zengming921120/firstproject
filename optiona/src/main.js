// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from "qs"
import {getItem} from "./util/cookie";

// import store from "@/api"

Vue.config.productionTip = false

Vue.prototype.router = router;

import cancelTokenSources from "@/api"
Vue.prototype.$http=axios;
Vue.prototype.qs=qs;

// const base = "http://localhost:3000";
//禁止favicon.ico文件的请求
// axios.interceptors.request.use(config=>{
//   if(config.url!==base+"/favicon.ico"){
//     return config;
//   }
// })

// axios.interceptors.response.use((data)=>{},(err)=>{
//   if(err.toString().includes("401")){
//     location.href="http://localhost:8080/#/login"
//   }
// })
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)



/* eslint-disable no-new */
//路由守卫
// router.afterEach(()=>{
//   for(const [cancelToken, cancel] of cancelTokenSources){
//     cancel(cancelToken);
//   }
// })
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
      if(getItem("tokenID")){
          next();
      }else {
        next("/login");
      }
  }else {
    next()
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // store
})
