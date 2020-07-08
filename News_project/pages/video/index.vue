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
					<image :src="item.image" mode="" class="movie_image"></image>
					<view class="movie_name">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
			<!-- 热门内容结束 -->
			
			<!-- 热门预告 -->
			<view class="">
				<view class="page_block">
					<image src="../../static/icos/interest.png" mode="" class="hot_icon"></image>
					<view class="hot_title">
						热门预告
					</view>
				</view>
			</view>
			<!-- 热门结束 -->
			
			<!-- 预告视频开始 -->
			<view class="hot_movies">
			<video 
				v-for="item in videos"
				:src="item.url" 
				controls
				class="hot_movies_single">
					
				</video>
			</view>
				
			<!-- 预告视频结束 -->
			
			<!-- 猜你喜欢 -->
			<view class="">
				<view class="page_block">
					<image src="../../static/icos/guess-u-like.png" mode="" class="hot_icon"></image>
					<view class="hot_title">
						猜你喜欢
					</view>
				</view>
			</view>
			<view class="guess_u_like">
				<view class="guess_u_like_single">
					<image src="../../static/photo/1.jpg" mode="aspectFill" class="movie_image"></image>
					<view class="movie_des">
						<view class="movie_des_title">
							金刚狼
						</view>
						<view class="movie_des_info">
							2018/ 美国 /
						</view>
						<view class="movie_des_info">
							主演
						</view>
					</view>
					
					<view class="movie_poster" @click="praiseMe">
						<image src="../../static/icos/praise.png" mode="" class="praise_ico"></image>
						<view class="praise_me">
							赞一下
						</view>
						<view class="praise_me animation_optity" :animation="animationData">
							+1
						</view>
					</view>
				</view>
			</view>
			
			
			<!-- 猜你喜欢结束 -->
	</view>
</template>

<script>
	// 导入自定义组件
	import testComp from "../../components/testComponents.vue"
	export default{
		components:{
			testComp
		},
		
		onUnload() {
			// 页面卸载时，清除动画操作
			// #ifdef APP-PLUS || MP-WEIXIN
				this.animation={};
				// #endif
		},
		
		onLoad() {
				this.animation = uni.createAnimation({
					
				});
		},
		
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
				],
				// 预告片数组
				videos:[
					{
						url:"https://media.w3.org/2010/05/sintel/trailer.mp4",
						thumd:"../../static/photo/6.jpg"
					},
					{
						url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
						thumd:"../../static/photo/2.jpg"
					},
					{
						url:"https://v-cdn.zjol.com.cn/277000.mp4",
						thumd:"../../static/photo/1.jpg"
					},
					{
						url:"https://v-cdn.zjol.com.cn/277002.mp4",
						thumd:"../../static/photo/3.jpg"
					}
				],
				
				animationData:{}
			}
		},
		
		methods:{
			praiseMe(){
				
				// #ifdef APP-PLUS || MP-WEIXIN
				this.animation.translateY(-60).opacity(1).step({duration:400});
				// 导出动画数据道view组件，实现组件的动画效果
				this.animationData = this.animation.export()
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
						duration:0
					});
					this.animationData = this.animation.export();
				}.bind(this), 500)
				// #endif
			}
			
		},
		onUnload() {
			// 页面卸载的时候，清除动画数组
			this.animationData = {};
		},
		
		onPullDownRefresh() {
			console.log("我下拉了");
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
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
	.movie_image{
		width: 200upx;
		height: 270upx;
		border-radius: 10upx;
	}

	.scroll_item{
		display: inline-block;
		margin-left: 20upx;
		
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
	
	.hot_movies{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20upx 20upx 20upx;
		
	}
	.hot_movies_single{
		height: 220upx;
		width: 350upx;
		margin-top: 20upx;
		border-radius: 10upx;
	}
	
	// 猜你喜欢
	.guess_u_like{
		
		display: flex;
		flex-direction: column;
	}
	
	.guess_u_like_single{
		
		display: flex;
		padding: 30upx 20upx;
	}
	
	.movie_des{
		width: 350upx;
		padding-left: 20upx;
		
	}
	.movie_des_title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #333333;
		font-size: 32upx;
		font-weight: bold;
	}
	
	.movie_des_info{
		
		color: #999999;
		font-size: 28upx;
	}
	.movie_poster{
		width: 140upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
		border-left: dashed 2px;
		border-left-color: #dbdbdb;
		
	}
	.praise_ico{
		width: 40upx;
		height: 40upx;
		align-self: center;
	}
	
	.praise_me{
		font-size: 14px;
		color: #F0AD4E;
		align-self: center;
	}
	.animation_optity{
		opacity: 0;
		// font-size: 14upx;
	}
</style>
