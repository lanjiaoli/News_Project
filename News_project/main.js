import Vue from 'vue'
import App from './App'
import {globalRequest} from "./pages/commont/unityRequest.js"
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$globalRequest = globalRequest
const app = new Vue({
    ...App
})
app.$mount()
// 聚合数据

// 首页数据
const BASE_Url = "http://wireless.tianya.cn";
const homeServerUlr = '/v/forumStand/getRecommendArt'
Vue.prototype.$BaseHomeServerUlr = BASE_Url + homeServerUlr;

Vue.prototype.serverUrl = BASE_Url;