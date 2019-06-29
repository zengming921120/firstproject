<template>
    <div class="login">
      <div class="login-top">
        <span @click="$router.go(-1)" class="login-logo" @click.prevent><</span><span>登录</span>
      </div>
      <div class="login-content">
        <input class="login-tel" @input="yanzheng" v-model="tel" type="text" placeholder="用户名"><br/>
        <input class="login-password" v-model="password" type="text" placeholder="密码"><br/>
          <span class="login-forget">忘记密码?</span><br/>
        <button :bos="shows" @click="deng" class="login-loading">登录</button><br/>
        <p style="color: red;" v-show="bol">请输入正确手机号</p>
        <span class="login-footer" ><a href="#" @click.prevent>没有账号?</a><a href="#" @click.prevent>立即注册</a></span>
      </div>
      <div class="foot">
        <span>快速登录</span>
      </div>
    </div>
</template>
<script>
  import {login} from "@/api";
  import {setItem,getItem} from "@/util/cookie";
  import bus from "@/util/bus";

  export default {
  name:'login',
  data(){
    return{
      tel:"",
      password:"",
      bol:false,
      shows:[]
    }
  },
  methods:{
    yanzheng(){
      let reg = /^1[3456789][0-9]{9}$/;
      this.bol = !reg.test(this.tel);
      console.log(this.bol);
    },
     deng(){
      // let that=this;
      login({
          tel: this.tel,
          password: this.password
        }).then(res=>{
         // console.log(res);
         let date = new Date();
         date.setDate(date.getDate()+7);
         setItem("tokenID",res.data.tokenID,date);
         setItem("uid",res.data.uid,date);
         this.$router.push("/shopcar");
       })
     }
  }

}
</script>
<style>
  .login{
  text-align: center;
  }
.login-top{
  background: red;
  color: white;
  padding: 15px 0;
  width: 100%;
}
  .login-logo{
    position: absolute;
    left: 20px;
  }
  .login-content input{
    outline: none;
    width: 85%;
    height: 35px;
    padding: 5px 10px;
    margin-top: 30px;
    border: solid 1px #eee;
  }
  .login .login-forget{
    color: red;
    display: inline-block;
    padding: 5px;
    margin-left: 70%;
  }
  .login .login-loading{
    background: red;
    color: white;
    width: 85%;
    padding: 10px;
  }
  .login .login-footer a{
    font-size: 14px;
    color: red;
    display: inline-block;
    padding: 3px;
    margin-top: 50px;
  }

</style>
