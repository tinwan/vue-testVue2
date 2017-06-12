// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App';
import axios from "axios";
import iView from 'iview';
import routes from "./config/routes";
import store from "./store/index";
import 'iview/dist/styles/iview.css';    // 使用 CSS
import './style/base/chromeIcon.css';    // 使用 CSS
import searchBar from "./components/searchBar.vue";

// Debug mode
Vue.config.debug = true;

// Devtools enabled
Vue.config.devtools = true;

// Silence logs and warnings
Vue.config.silent = false;

Vue.config.productionTip = false;

// install router
Vue.use(VueRouter);

// install iview
Vue.use(iView);
/* eslint-disable no-new */
// 将API方法绑定到全局
Vue.prototype.$axios= axios;
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el: '#app',
  router,
  store,
    render: (h) => h(App)
});
