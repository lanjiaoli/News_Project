<template>
	<view>
		 <uniSegmentedControl 
		 :current="current" 
		 :values="items" 
		 @clickItem="onClickItem" 
		 active-color="#f15a22"
		 style-type="text">
		 </uniSegmentedControl>

			
	<!-- <newslistView></newslistView> -->
	</view>
</template>

<script>
	import newslistView  from "pages/index/newslist/newslist"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	
	export default {
		data() {
			return {
				title: 'Hello',
				items: [
					'推荐',
					'北京',
					'娱乐',
					'情感',
					'杂谈',
					'经济',
					'旅游',
					'文学',
					'图片'
				],
				current:0
			}
		},
		onLoad() {
			
		},
		methods: {
			
		},
		components:{
			newslistView,
			uniSegmentedControl
			
		}
	}
	
</script>

<style>
	
</style>
