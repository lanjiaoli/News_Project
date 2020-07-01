const GlobalLoadingText = "加载中...";

export const globalRequest = (options)=> {
	return new Promise((resolve,reject)=> {
		// uni.showLoading({
		// 	title:GlobalLoadingText,
			
		// })
		uni.request({
			url: options.url,
			data:options.data || {},
			method:options.method || "GET",
			header:options.header,
			
			success:(res)=>{
				uni.hideToast();
				console.log("请求成功");

				resolve(res.data)
			},
			fail(err) {
				uni.hideToast();
				console.log("请求失败");
				reject(err.data)
				let code = err.code;
				uni.showErrorMessage()
			},
			complete: (res)=> {
				uni.hideToast();
			}
		},
		
		)
	})
}

