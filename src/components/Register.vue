<template>
  <div class="register">
    <div class="container">
      <img src="../assets/logo.png" />
      <p>注册</p>
      <div class="input-box1">
        <input type="text" placeholder="请输入邮箱" v-model="email"/>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <div class="input-box1">
        <input type="text" placeholder="请输入账号" v-model="passport" />
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
            <div class="input-box1">
        <input type="password" placeholder="请输入密码" v-model='password'/>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
            <div class="input-box1">
        <input type="password" placeholder="请再次输入密码" v-model="password_"/>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <div class="bottom">
        <button @click="checkPw">注册</button>
        <router-link to="/login">
          <div class="toRegister">返回登录</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            passport:'',
            password:'',
            password_:''
        }
    },
    methods:{
        checkPw(){
           if(this.password==this.password_){
           console.log("错误");
           }
        }
    }
}
</script>
<style scoped>
.register{
  background-color: #282c34;
   width: 100%;
  height: calc(100vh);
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