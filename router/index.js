import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../src/components/Register.vue'
import Login from "../src/components/login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/register",
    name: 'register',
    component: Register
  },{
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: '/', redirect: '/login'
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',  //路由默认的样式
  routes
})

export default router
