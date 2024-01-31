<template>
    <view>您所访问的页面不存在,即将跳转回首页…</view>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    onLoad(){
        let timer=setTimeout(() => {
            clearTimeout(timer)
            uni.navigateTo({
                url:"../index/index"
            })
        }, 2000);
    }
})
</script>

<style>

</style>
