<template>
	<view>
		<view class="content">
			<navigator 
			v-for="(item,index) in data" 
			:key="index"
			:url="`/pages/index/webDetail/webDetail?url=${item.url}`"
			>
				<view class="class_item">
					<view class="item_content">
						<text>{{item.title}}</text>
						
					</view>
					<!-- 图片开始 -->
					<view class="item_image">
						<!-- <view v-for="item_pic in item.picList" :key="item"> -->
							<image src="http://img3.laibafile.cn/p/l/317506314.png" mode="widthFix"></image>
						<!-- </view> -->
					</view>
					<!-- 图片结束 -->
					<view class="conten_bottom">
						<text>{{item.createTime}}</text>
						<text class="author_name">{{item.author}}</text>
					</view>
				</view>
			</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					
				},
				params:{
					pageNo:1,
					pageSize:20,
				}
				
			}
		},
		methods: {
			getList(){
				console.log("请求数据")
				this.$globalRequest({
					url:this.$BaseHomeServerUlr,
					data:this.params,
				header:{
					headCstr:"66302828d4772aa6f8a7a1273522bc5d",
					uuid:"7D22F54B-F283-4638-A28D-8C8CE2052CB2"
				}
				}).then(res =>{
					
					console.log(res.data.list)
					this.data = res.data.list
				})
			},
			
			
			handleClick(options){
				console.log("跳转下一页")
				uni.navigateTo({
					url:"../webDetail/webDetail?url="
				})
			}
			
		},
		
		mounted() {
			this.getList()
		}
	}
</script>

<style lang="scss" scoped>
.content{
	.class_item{
		// display: flex;
		border-bottom: 0.5rpx solid #dddddd;
		margin: 0rpx 30rpx;
		.item_image{
			display: flex;
			justify-content: space-between;
			// align-items: center;
			
			image{
				// margin-right: 30rpx ;
				width: 30%;
				height: 28vw ;
				border-radius: 10rpx;
			}
		}
		.item_content{
			flex: 2;
			color: #333333;
			font-size: 32rpx;
			padding: 20rpx 0;
		}
		.conten_bottom{
			display:flex;
			padding: 10rpx 0rpx;
			font-size: 24rpx;
			color: #999999;
			justify-content: space-between;
			.author_name{
				color: #112b7d;
				font-weight: bold;
				// padding-right: 0px;
				// align-items: flex-start
			}
		}
	}
}
</style>
