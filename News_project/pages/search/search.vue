<template>
	<view class="page">
		<view class="search_block">
			<view class="search_ico-wapper" >
				<image src="../../static/icos/search.png" mode="" class="search_ico"></image>
			</view>
			<input type="text" value="" placeholder="输入搜索的内容" class="search_text" focus="true"/>
			
		</view>
		
		<!-- 列表 -->
		<view class="movie_list">
			<view class="movie_wapper" 
			v-for="item in hotList" :ket="item" 
			@click="showMovie(item.title)">
				<image :src="item.image" mode="aspectFill"></image>
			</view>
		</view>
		<!-- 列表展示完 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
						},
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
						},
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
		},
		methods: {
			
			showMovie(e){
				console.log(e);
				uni.navigateTo({
					url:"../movie/movie?name="+e
				})
			}
			
		},
		onReachBottom() {
			console.log("人家是有底线的")
			uni.showLoading({
				title:"加载中"
			})
			var array = [{
					image:'../../static/photo/6.jpg',
					title:"分歧者2 · 绝地反击"
				},
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
				},
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
				}];
				this.hotList = [...this.hotList , ...array];
				console.log()
			setTimeout(function(){
				uni.hideLoading()
				
			},1000)
		}
	}
</script>

<style>
 @import url("search.css");
</style>
