<template>
  <web-view :src="url">
    <view>111111</view>
  </web-view>
</template>

<script>
export default {
    data(){
        return{
            url:''
        }
    },
    onload(options){
        this.url=decodeURI(options.url)
        console.log(this.url)
    }

}
</script>

<style>

</style>