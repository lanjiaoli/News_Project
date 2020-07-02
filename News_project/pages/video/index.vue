<template>
	<view class="">
		<!-- 轮播图开始 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 320upx;">
			<swiper-item v-for="(item, index) in imageList" 
			:key="index">
				<view class="swiper-item" >
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
			</swiper>
			<!-- 轮播图结束 -->
			
			<!-- 热门标题 -->
			<view class="">
				<view class="page_block">
					<image src="../../static/icos/hot.png" mode="" class="hot_icon"></image>
					<view class="hot_title">
						热门
					</view>
				</view>
			</view>
			<!-- 热门标题结束 -->
			
			<!-- 热门内容开始 -->
			<scroll-view scroll-x="true"  class="page_scroll">
				<view class="scroll_item" 
				v-for="item in hotList" 
				:key="item" >
					<image :src="item.image" mode=""></image>
					<view class="movie_name">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
			<!-- 热门内容结束 -->
			

	</view>
</template>

<script>
	export default{

		data(){
			return {
				imageList:[
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593713135505&di=840edbdc18f28588fc2ba3c16985ed4d&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0824ab18972bd407ff38f2b378899e510eb30984.jpg",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593713564986&di=0ae1b937cf0ed4c3553b552335d021d9&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F55ff71b17ea14.jpg",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593713730636&di=f4a561c3d59e5e9f54c04b8916e7b5d8&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2F20170805%2F75af-fyitapp1206676.jpg"
				],
				
				hotList:[
					{
						image:'../../static/photo/1.jpg',
						title:"Red Heaven"
					},
					{
						image:'../../static/photo/2.jpg',
						title:"波西·杰克与神火之盗"
					},
					{
						image:'../../static/photo/3.jpg',
						title:"2012"
					},
					{
						image:'../../static/photo/4.jpg',
						title:"南京！南京！"
					},
					{
						image:'../../static/photo/5.jpg',
						title:"我是传奇"
					},
					{
						image:'../../static/photo/6.jpg',
						title:"分歧者2 · 绝地反击"
					}
				]
				
			}
		}
		
	}
	
</script>

<style lang="scss" scoped>
	.swiper-item{
		width: 100%;

		image{
			width: 100%;
		}
	}
	
	.page_block{
		display: flex;
		flex-direction: row;
		padding: 20upx;
	}
	.hot_icon{
		width: 30upx;
		height: 30upx;
		margin-top: 15upx;
	}
	.hot_title{
		font-size: 36upx;
		padding-left: 20upx;
		font-weight: bold;
	}
	.page_scroll{
		width: 100%;
		white-space: nowrap;
	}
	

	.scroll_item{
		display: inline-block;
		margin-left: 20upx;
		image{
			width: 200upx;
			height: 270upx;
			border-radius: 10upx;
		}
		.movie_name{
			width: 200upx;
			height: 90upx;
			font-size: 24upx;
			margin-top: 10upx;
			font-weight: bold;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: center;
		}
		
	}
	
</style>
