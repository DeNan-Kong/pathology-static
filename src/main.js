// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
 import $ from "jQuery"
import routes from './routes';
import storeOption from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN';

import 'element-ui/lib/theme-default/index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI, { locale });

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(storeOption);

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});