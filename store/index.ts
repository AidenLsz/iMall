import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
Vue.use(Vuex)

const store:StoreOptions<RootState> ={
    state:{
        username:uni.getStorageSync('username')?uni.getStorageSync('username'):'未登录'
    },
    mutations:{
        Login(state,username){
            uni.setStorageSync('username',username)
            state.username=username
        },
        Logout(state){
            uni.clearStorageSync()
            state.username='已退出'
        }
    },
    actions:{
        login(context,username){
            context.commit("LOGIN",username)
        },
        logout(context){
            context.commit("LOGOUT")
        }
    }
}

export default new Vuex.Store<RootState>(store);