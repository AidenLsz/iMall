import Vue from 'vue'
import App from './App.vue'
import './uni.promisify.adaptor'
import store from "../store"
import uView from "uview-ui"

Vue.use(uView)
Vue.config.productionTip = false
console.log(store.state)

if(process.env.NODE_ENV==='development'){
    console.log("开发环境")
}else{
    console.log("生产环境")
}

const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))({
    store
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
// @ts-ignore
import httpInterceptor from '../common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
// @ts-ignore
import httpApi from '../common/http.api.js' // @ts-ignore
Vue.use(httpApi, app)

app.$mount();
