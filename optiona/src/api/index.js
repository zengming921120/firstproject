import axios from "axios";
import qs from "qs";
import {getItem} from "@/util/cookie";
import router from "@/router"

// import Vuex from "Vuex"
import Vue from "Vue"
// Vue.use(Vuex)
// var state;
// let store = new Vuex.Store({
//   state:{
//     requests:[]
//   }
// })
// export default store


// const service = axios.create({
//   // timeout:5000
// })
// const clearRequest = {
//   source:{
//     token:null,
//     cancel:null
//   }
// }
// var CancelToken = axios.CancelToken;
// var source = CancelToken.source();
// var cancel;
// const cancelTokenSources = new Map();

const base = "";
const header = {"content-type":"application/x-www-form-urlencoded"};
//配置发送请求拦截器

axios.interceptors.request.use(config=>{
  // console.log(config);
  if(config.url==base+"/login"){
      console.log(111)
      return config;
  }else {
    console.log(22)
    //cors跨域不允许在请求头中携带tokenID
      config.headers.authorization = getItem("tokenID");
      return config;
  }

});

axios.interceptors.response.use((data)=>{

  return data;
},(err)=>{
  if(err.toString().includes("401")){
    location.href="http://localhost:8080/#/login"
    // router.push("/login");
  }

})

export let login = (data) => {
  return axios({
    method:"post",
    url:base+"/login",
    data:qs.stringify(data),
    headers:{
       "content-type":"application/x-www-form-urlencoded"
    }
  })
}
export let goback = () => {
  return axios({
    method:"get",
    url:base+"/goback",
    // data:qs.stringify(null),
    // headers:{
    //   "content-type":"application/x-www-form-urlencoded"
    // }
  })
}


export let change = (data) =>{
  return axios({
    method:"post",
    url:base+"/change",
    data:qs.stringify(data),
    header:{
      "content-type":"application/x-www-form-urlencoded"
    }
  })
}
export let shopcardel = (data) =>{
  return axios({
    method:"post",
    url:base+"/shopcardel",
    data:data,
    header:{
      "content-type":"application/x-www-form-urlencoded"
    }
  })
}
// export let order = ()=>{
//   return axios({
//     method:"get",
//     url:base+"/order",
//     params:{uid:getItem("uid")}
//   })
// }
export let getidgoods = (data)=>{
  return axios({
    method:"post",
    url:base+"/getidgoods",
    data:qs.stringify(data),
    header:{
      "content-type":"application/x-www-form-urlencoded"
    }
  })
}
export let getnum = ()=>{
  return axios({
    method:"get",
    url:base+"/getnum",
    // headers:{
    //   "X-Requested-With":"XMLHttpRequest"
    // }
  })
}
// export let getallgoods = ()=>{
//   return axios({
//     method:"get",
//     url:base+"/getallgoods",
//     cancelToken:source.token
//     // headers:{
//     //   "X-Requested-With":"XMLHttpRequest"
//     // }
//   }).catch(function (thrown) {
//     if(axios.isCancel(thrown)){
//       console.log('Request canceled',thrown.message)
//     }
//   })
// }
// this.$store.state.requests.push(source)

// export let getsortgoods = ()=>{
//   return axios({
//     method:"get",
//     url:base+"/getsortgoods",
//     // headers:{
//     //   "X-Requested-With":"XMLHttpRequest"
//     // }
//   })
// }
export let getspecialgoods = ()=>{
  return axios({
    method:"get",
    url:base+"/getspecialgoods",
    // headers:{
    //   "X-Requested-With":"XMLHttpRequest"
    // }
  })
}

export let deletegoods = (data)=>{
  return axios({
    method:"post",
    url:base+"/deletegoods",
    data:qs.stringify(data),
    header:{
      "content-type":"application/x-www-form-urlencoded"
    }
  })
}
