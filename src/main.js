// src/main.js
import Vue from 'vue'
import store from './store'//vuex仓库
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios';//请求模块
Vue.prototype.$http = axios;

import App from './App'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import routes from './router/routes'
import fastclick from 'fastclick'
fastclick.attach(document.body);//300ms问题

import './static/flexible_css.debug.js'
import './static/flexible.debug.js'

import Icon from 'vue-awesome/components/Icon.vue'
Icon.register({
  lock: {
    width:1000,
    height:1000,
    d:"M928 932.032 928 451.984c0-33.104-26.624-60-59.424-60L273.984 391.984l0.304-25.44c0-161.632 98.896-274.56 240.56-274.56 103.696 0 196.096 60.176 241.216 157.072 6.96 15.008 24.608 21.44 39.552 14.352 14.848-7.04 21.184-24.912 14.16-39.904C754.816 105.44 641.84 32 514.848 32c-173.824 0-299.984 140.672-299.984 334.192l-0.32 25.808L155.44 392C122.624 392 96 418.88 96 451.984l0 480.048C96 965.104 122.624 992 155.44 992l713.136 0C901.376 992 928 965.104 928 932.032L928 932.032zM155.44 451.984l713.136 0 0 480.048L155.44 932.032 155.44 451.984 155.44 451.984 z"
  },
  user: {
    width:1000,
    height:1000,
    d:"M790.526039 660.015102c-8.549723-8.5487-22.399149-8.5487-30.947849 0-8.527211 8.549723-8.527211 22.420639 0.021489 30.970362 66.148559 66.147536 102.56598 154.073074 102.56598 247.599168 0 12.096503 9.788947 21.88545 21.886473 21.88545s21.88545-9.787924 21.88545-21.88545C905.937582 833.367265 864.944959 734.434022 790.526039 660.015102zM511.999488 63.529919c-144.819317 0-262.625396 117.806079-262.625396 262.625396 0 103.296621 59.94323 192.832843 146.865929 235.69607-60.833507 18.608823-116.557646 51.941999-162.788573 98.185206-74.41892 74.397431-115.390054 173.330674-115.390054 278.547017 0 12.096503 9.788947 21.88545 21.88545 21.88545s21.88545-9.787924 21.88545-21.88545c0-93.526093 36.419468-181.451632 102.567004-247.599168 63.74993-63.771419 147.798161-99.901291 237.588163-102.413508 3.323699 0.125867 6.658653 0.209778 10.012028 0.209778 144.819317 0 262.626419-117.805056 262.626419-262.625396C774.624884 181.335998 656.818805 63.529919 511.999488 63.529919zM515.542174 544.965809c-1.170662-0.192382-2.362814-0.319272-3.585665-0.319272-3.328815 0.001023-6.65149 0.042979-9.967002 0.125867-116.040876-5.252631-208.843492-101.304244-208.843492-218.61709 0-120.668267 98.185206-218.853473 218.854497-218.853473s218.854497 98.185206 218.854497 218.853473C730.853985 445.64064 634.582361 543.06553 515.542174 544.965809z"
  },
  arrow: {
    width:1000,
    height:1000,
    d:["M516.224 682.432 925.408 278.688c9.728-9.696 30.528-37.632 46.912-25.728l37.568 20.384c9.728 10.016 10.048 25.728 0.64 35.36L535.328 780.16c-9.984 9.984-26.016 10.336-35.648 0.608M85.696 269.216","M530.592 780.736c-9.696 9.76-25.696 9.376-35.68-0.608L19.744 308.736c-9.376-9.632-9.088-25.344 0.64-35.36L57.92 252.992c16.416-11.904 37.184 16.032 46.848 25.728L520 686.016M944.576 269.216"]
  }
})


require('assets/css/common.less')


const router = new VueRouter({
    mode: 'history',//H5模式or HASH模式
    routes,
    saveScrollPosition: true
})

//路由验证登录
router.beforeEach((to, from, next) => {
    var isLogin = Boolean(store.state.user.isLogin) //true用户已登录， false用户未登录
    if (to.meta.requireAuth) {  // 判断该路由可否
        console.log('here1')
        if (isLogin) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({path: '/login'})
        }
    }else {
        console.log('here2')
        next();
    }
    // next();
})

/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
  el: '#app',
  router,
  store,
  ...App
})

// new Vue({ store, router }).$mount('#app')

