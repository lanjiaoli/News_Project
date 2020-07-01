<template>
	<view>
		<!-- 视图开始 -->
		<view class="container">
			<view class="subscribe_item" 
			v-for="(item ,index) in tbSubTopicArticles"
			:key = "index"
			>
			<view class="item_image">
				<image :src="item.picPath" mode="aspectFill"></image>
			</view>
			<view class="item_content">
				<view class="item_content_title">
					<text >{{item.articleTitle}}</text>	
				</view>
				<view class="item_content_des">
				<text  >{{item.articleContent}}</text>	
				</view>
				<!-- 名称 -->
				<view class="item_content_name">
				<text  >{{item.dataSourceName}}</text>	
				</view>
				<!-- 名称结束 -->
				<!-- 时间开始 -->
				<view class="item_content_time">
					{{item.createTime}}
				</view>
				<!-- 时间结束 -->
			</view>
			</view>
		</view>
		<!-- 视图结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tbSubTopicArticles:[{}]
			}
		},
		methods: {
			
			getRequest(){
				this.$globalRequest({
					url:'http://www.gintong.com/sub/subtopicApp/getUserArticleList',
					method:"POST",
					data:{
						"startCreateTime": "",
						"endCreateTime": "",
						"createTime": 0,
						"keyWord": "",
						"page": 0,
						"size": 20,
						"sort": 1,
						"topicId": 0,
						"topicIds": [],
						"type": -1},

				}).then(res =>{
					console.log(res)
					this.tbSubTopicArticles = res.responseData.tbSubTopicArticles
				})
			}
			
		},
		
		mounted() {
			console.log("请求数据")
			this.getRequest()
		}
	}
</script>

<style lang="scss" scoped>
	

	.subscribe_item{
		display: flex;
		height: 240upx;
		margin: 20upx 20upx;
		border-bottom: 3upx solid #F8F8F8;
		.item_image{
			display: inline-block;
			margin: auto;
			width: 30%;
			// text-align: center;
			
			image{
				display: block;
				margin: auto;
				width: 160upx;
				height: 160upx;
				border-radius: 10upx;
			}
		}
		.item_content{
			width: 69%;
			padding: 10rpx;
			position: relative;
			font-size: 24upx;
			line-height: 1.5em;
			color: #999999;
			.item_content_title{
				font-size: 28upx;
				color: #007AFF;
			}
			.item_content_des{
				padding-top: 10rpx;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			.item_content_name{
				position: absolute;
				padding: 10upx 0;
				bottom: 10rpx;
				right: 20upx;
				color: #DD524D;
			}
			
			.item_content_time{
				position: absolute;
				padding: 10upx 0;
				bottom: 10rpx;
				// right: 20upx;
			}
		}
	}
</style>
