// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import $jQuery from "jQuery"
import routes from './routes';
import StoreOption from './store';
import ElementUI from 'element-ui';
import ElementUI_Locale from 'element-ui/lib/locale/lang/zh-CN';
import 'element-ui/lib/theme-default/index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import VeeValidate from 'vee-validate';
import validatorMessages  from './assets/strings/locale/zh-cn/validator-messages.js';
import validatorAttributes  from './assets/strings/locale/zh-cn/validator-attributes.js';
import labelMessages  from './assets/strings/locale/zh-cn/label-messages.js';
import VueI18n  from 'vue-i18n';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(Vuex);
Vue.use(VueRouter);
// install plugin
Vue.use(VueI18n);
Vue.use(iView);
// ready translated locales

Vue.config.lang = 'cn';
Vue.locale('cn', labelMessages);

// set locales
Vue.use(ElementUI, {ElementUI_Locale});
Vue.use(VeeValidate, {
    locale: 'cn',
    dictionary: { // dictionary object
        cn: {   // locale key
            messages: validatorMessages,
            attributes:validatorAttributes
        }
    }
});


// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
    routes: routes
});


// Register a global custom directive called v-focus


// 创建一个 store 对象用于管理应用状态
const store = new Vuex.Store(StoreOption);

let app= new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

app.$jQuery = $jQuery;
window.__lendApp__ = app;
