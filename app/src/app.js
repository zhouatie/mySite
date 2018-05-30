
import Vue from 'vue';
import ElementUI from 'element-ui';
import Cookie from 'js-cookie';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'medium' });

Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = process.env.NODE_ENV !== 'production';
Vue.prototype.$cookie = Cookie;

import VuexRouterSync from 'vuex-router-sync';
import store from './store';
import router from './routes';

VuexRouterSync.sync(store, router);

import 'babel-polyfill';// 加入垫片

// 扩展finally方法
require('promise.prototype.finally').shim();

// 引入公共样式
import '@/styles/index.less';
