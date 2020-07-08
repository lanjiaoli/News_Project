<template class="testComp">
	<view>
		{{msg}}
		<view class="">
			<input type="text" :value="myval" class="txt" />
		</view>
	</view>
</template>

<script>
	export default {
		
		name:"testComp",
		data() {
			return {
				
				msg: "这是一个组件"
			};
		},
		
		
		
		props:{
			// 定义一个变量，用于接受父组件（首页或其他页面）传入的参数
			myval:{
				type: String //定义这个参数的定义类型
			}
		}
	}
</script>

<style>
	.txt{
		color: #007AFF;
	}
</style>
