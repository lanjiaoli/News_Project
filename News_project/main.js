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
const JUCNewsKey = '5879c983c87f5f7a27fbc71347ed6760';

Vue.prototype.$NewJHKey = JUCNewsKey;
// 首页数据
const homeServerUlr = '/v/forumStand/getRecommendArt'
Vue.prototype.$BaseHomeServerUlr = homeServerUlr;