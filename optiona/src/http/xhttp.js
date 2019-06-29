// import axios from "axios";
//
// const clearRequest = {
//   source:{
//     token:null,
//     cancel:null
//   }
// }
// const CancelToken = axios.CancelToken;
// const source =CancelToken.source();
// //配置发送请求拦截器
// axios.interceptors.request.use(config=>{
//   // console.log(config);
//   config.cancelToken = clearRequest.source.token;//取消请求关键语句
//   return config;
// },error => {
//   return Promise.reject(error)
// })
//
// export default {
//   post (url,data){
//     return axios({
//
//     })
//   }
// }
