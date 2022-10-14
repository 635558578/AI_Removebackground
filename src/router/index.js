import Vue from 'vue'
import VueRouter from 'vue-router'
import upload from '../components/upload.vue'
import login from '../components/login.vue'
import registe from '../components/registe.vue'
import forget from '../components/forget.vue'
// import login from '../components/login.vue'
import axios from 'axios'
import { Message } from 'element-ui'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/registe', component: registe },
    { path: '/forget', component: forget },
    { path: '/upload', component: upload },
    // { path: '/upload', component: upload },
]


const router = new VueRouter({
        routes
    })
    //路由守卫



export default router