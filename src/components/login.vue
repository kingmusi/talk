<template>
  <div class="login">
    <div class="container">
      <img src="../assets/logo.png" />
      <p>登录</p>
      <div class="input-box1">
        <input type="text" placeholder="请输入账号"  v-model="LoginForm.passport"/>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <div class="input-box2">
        <input type="password" placeholder="请输入密码" v-model="LoginForm.password" />
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <div class="bottom">
        <button @click="login">登陆</button>
        <router-link to="/register">
          <div class="toRegister">去注册</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      LoginForm:{ 
        passport:'',
        password:''
        }
     
    }
  },
  methods:{
    login(){
      // let _this = this;
       this.axios({
          method: 'post',
          url: '/api/user/login-submit',
          params:{
            passport:this.LoginForm.passport,
            password:this.LoginForm.password
          }
        }).then(res => {
          console.log(res.data);})

}
  }
}
</script>
<style scoped>
.login{
  background-color: #282c34;
}
* {
  padding: 0;
  margin: 0;
}
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login {
  width: 100%;
  height: calc(100vh);
}
img {
  width: 36px;
  height: 36px;
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
}
p {
  text-align: center;
  font-size: 20px;
  letter-spacing: 10px;
  color: rgba(97, 218, 251, 0.5);
  font-weight: bolder;
  margin-bottom: 15px;
}
.input-box1 {
  position: relative;
}
.input-box2 {
  position: relative;
}
input {
  height: 30px;
  width: 250px;
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding-left: 5px;
  background-color: #282c34;
  color: #61dafb;
  caret-color: #61dafb;
}
input::placeholder {
  color: rgba(97, 218, 251, 0.5);
}
span {
  position: absolute;
  content: "";
  display: block;
  background-color: #61dafb;
  transition: transform 0.1s ease-in-out;
}

.top,
.bottom {
  left: 0px;
  right: 0px;
  height: 2px;
}

.left,
.right {
  top: 0px;
  bottom: 0px;
  width: 2px;
  transform: scaleY(0);
}

.top {
  top: 0px;
  transform: scaleX(0);
  transform-origin: left center;
  transition-delay: 0.2s;
}
.left {
  left: 0px;
  transform-origin: bottom center;
  transition-delay: 0.3s;
}
.bottom {
  bottom: 0px;
}
.right {
  right: 0px;
  transform-origin: top center;
  transition-delay: 0.1s;
}

input:focus ~ .right {
  transform: scaleY(1);
  transform-origin: bottom center;
}
input:focus ~ .left {
  transform: scaleY(1);
  transform-origin: top center;
}
input:focus ~ .top {
  transform: scaleX(1);
  transform-origin: right center;
}
button {
   border:none;
  background-color: rgb(85, 208, 253);
  color: aliceblue;
  height: 30px;
  width: 250px;
  display: block;
  margin: 0 auto;
}
.toRegister {
  margin-top: 10px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #61dafb;
}
</style>