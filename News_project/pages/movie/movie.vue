<template>
	<view class="page">
		<!-- 视频播放开始 -->
		 <view class="player">
		 	<video 
			src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
			class="movie"
			></video>
		 </view>
		 <!-- 视频播放结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(options.name)
			uni.setNavigationBarTitle({
				title:options.name
			})
		}
	}
</script>

<style>

	@import url("movie.css");
</style>
