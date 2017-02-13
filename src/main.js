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
import validatorCn  from './assets/strings/locale/zh-cn/validator.js';
import VueI18n  from 'vue-i18n';


Vue.use(Vuex);
Vue.use(VueRouter);
// install plugin
Vue.use(VueI18n);
// ready translated locales

/*
var locales = {
    en: {
        login: {
            user_name: "user name",
            password: 'password',
            login: "login"
        }
    },
    cn: {
        login: {
            title: "",
            description: "海纳病理管理系统",
            sub_title: "用户登录",
            user_name: "用户名",
            password: '密码',
            login: "登录",
            exit: "退出",
            user_management: "用户管理"
        }
    }
};*/

var localeHelper = {
    async load(){
        const response = await fetch('/locale/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            })
        });
        const json = await response.text();
        const result = JSON.parse(json);

        // set lang
        Vue.config.lang = 'cn';
        Vue.locale('cn', result);
    }
};
localeHelper.load();

// set locales
Vue.use(ElementUI, {ElementUI_Locale});
Vue.use(VeeValidate, {
    locale: 'cn',
    dictionary: { // dictionary object
        cn: {   // locale key
            messages: validatorCn
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