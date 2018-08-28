// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决某些机型点击事件延迟300ms才会触发 */
import fastClick from 'fastclick'

/* 设置基础样式，各个终端样式统一 */
import './assets/styles/reset.css'
/* 二倍屏、三倍屏的“1像素”问题 */
import './assets/styles/border.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
