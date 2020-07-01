<template>
	<view>
	<!-- 	 <uniSegmentedControl 
		 :current="current" 
		 :values="items" 
		 @clickItem="onClickItem" 
		 active-color="#f15a22"
		 style-type="text">
		 </uniSegmentedControl> -->
		<scroll-view 
		scroll-x="true" 
		class="header">
			<view class="header_item" v-for="(item , index) in items" :key = "index">
				<text 
				@click="handelHeader(index)"
				:style="{
					color: index === current ? '#F15A22':'#333',
					fontSize: index === current ? '50upx':'30upx',
				}"
				>{{item}}</text>
				<view class="heade_line" 
				:style="{
					backgroundColor: index === current ? '#F15A22':'#fff'
				}">
				</view>
				
			</view>
		</scroll-view>
		
			
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
					'图片',
					'图片',
					'图片',
					'图片',
					'图片',
					
				],
				current:0
			}
		},
		onLoad() {
			
		},
		methods: {
			handelHeader(num){
				console.log(num);
				this.current = num
			}
		},
		components:{
			newslistView,
			uniSegmentedControl
			
		}
	}
	
</script>

<style lang="scss">
	.header{
		width: 100%;
		
		// overflow: hidden;
		// // overflow-y: hidden;
		white-space: nowrap;
		height: 100rpx;
		
		.header_item{
			display: inline-block;
			width: 150rpx;
			// height: 80upx;
			border:  1rpx solid #FFFFFF;;
			text-align: center;
			font-size: 32upx;
		}
		.heade_line{
			
			background-color: #F15A22;
			height: 5upx;
			width: 150rpx;
			margin-left: 1rpx;
			margin-top: 8rpx;
			
		}
		::-webkit-scrollbar {
			display: none;
		}
	}
	
</style>
