// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

/* 解决某些机型点击事件延迟300ms才会触发 */
import fastClick from 'fastclick';
/* 使不支持promise的手机支持 */
import 'babel-polyfill'
/* 轮播插件 */
import VueAwesomeSwiper from 'vue-awesome-swiper';

// 轮播插件的require styles
import 'swiper/dist/css/swiper.css';

/* 设置基础样式，各个终端样式统一 */
import 'styles/reset.css';

/* 二倍屏、三倍屏的“1像素”问题 */
import 'styles/border.css';

import 'styles/iconfont.css';

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
