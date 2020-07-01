<template>
	<view class="page">
	<!-- 	 <uniSegmentedControl 
		 :current="current" 
		 :values="items" 
		 @clickItem="onClickItem" 
		 active-color="#f15a22"
		 style-type="text">
		 </uniSegmentedControl> -->
	
		<!-- 顶部导航栏开始 -->
		<view class="heade_navigation">
			<scroll-view
			scroll-x="true" 
			class="header">
				<view class="header_item" v-for="(item , index) in items" :key = "index">
					<text 
					@click="handelHeader(index)"
					:style="{
						color: index === current ? '#F15A22':'#333',
						fontsize: index === current ? '50upx':'30upx',
					}"
					>{{item}}</text>
					<view class="heade_line" 
					:style="{
						backgroundColor: index === current ? '#F15A22':'#fff'
					}">
					</view>
					
				</view>
			</scroll-view>
		</view>
		<!-- 顶部导航栏结束 -->
	
		<view class="content">
	
			<view class="home_remmend" v-if="current == 0">
				<newslistView></newslistView>
			</view>
			<view class="home_local" v-if="current ==1">
				<subscriveView></subscriveView>
			</view>
		</view>
			
	
	</view>
</template>

<script>
	import newslistView  from "pages/index/newslist/newslist"
	import subscriveView from "pages/index/subscribe/subscribe"
	
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
			subscriveView
			
		}
	}
	
</script>

<style lang="scss">
	.header{
	
		// overflow: hidden;
		// // overflow-y: hidden;
		background-color:#FFFFFF;
		white-space: nowrap;
		height: 100rpx;
		position: fixed;
		top: 64;
		left: 0;
		.header_item{
			display: inline-block;
			width: 150rpx;
			// height: 80upx;
			border:  1rpx solid #FFFFFF;;
			text-align: center;
			margin-top: 15upx;
			
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
	
	.heade_navigation{
		height: 100upx;
	}
	
</style>
