<template>
	<view class="background">
		<view class="header-box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
				<swiper-item class="swiper-item">
					<navigator open-type="navigate" :url="'/pages/webview/index?url='+ encodeURI('http://baidu.com')">
						<image src="../../static/banner-1.jpg" class="swiper-item" />
					</navigator>

				</swiper-item>
				<swiper-item class="swiper-item">2</swiper-item>
				<swiper-item class="swiper-item">3</swiper-item>
				<swiper-item class="swiper-item">4</swiper-item>
			</swiper>
		</view>
		<view class="content">
        <image class="cover" src="../../static/cover.png">
		</image>
		<view class="text-area">{{ username }}</view>
	</view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState,mapActions } from 'vuex';

	export default Vue.extend({
		data() {
			return {
				autoplay: true,
				indicatorDots:true
			}
		},
		onLoad() {
            // #ifdef H5
            alert("在H5上")
            // #endif
            switch(uni.getSystemInfoSync().platform){
                case 'android':
                    console.log("在android上运行中…")
                    break
                case 'ios':
                    console.log("在ios上运行中…")
                    break
                default:
                    console.log('在开发者工具上运行中…')
                    break
            }

		},
		computed:{
			...mapState(['username']),
		},
		methods: {
			...mapActions(['login','logout'])

		}
	});
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:100%;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
	}

	.cover {
		height: 500rpx;
		width: 500rpx;
		margin: 0 auto;
		position: absolute;
		z-index: -1;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.background{
		width:100vh;
		height: 100vh;
		background-color: rgb(198, 235, 198);
	}
	.swiper{
		background-color: red;
		height: 300rpx;
		width:100vw;
	}
	.swiper-item{
		display: block;
		height: 300rpx;
		width:100vw;
		line-height: 300rpx;
		text-align: center;
	}
</style>
