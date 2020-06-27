<template>
	<view>
		<web-view :src="webUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webUrl :"",
				
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log("详情页面")
			console.log(options.url)
			this.webUrl = options.url
		}
	}
</script>

<style>

</style>
