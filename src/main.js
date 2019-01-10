// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rt from './router/index'//可省略index.js
import axios from "axios";
import { Lazyload, InfiniteScroll, Button,Header,Loadmore, IndexList, IndexSection, Cell ,Navbar, TabItem } from 'mint-ui';
import "animate.css"
//自定义插件 模块
//引入redirective
import store from "./store"
import './stylesheets/main.scss'
import './modules/rem'
import "./modules/directives"
Vue.config.productionTip = false
Vue.use(Lazyload);
Vue.use(InfiniteScroll);


Vue.prototype.$http = axios;
/* eslint-disable no-new */
//mint ui 注册
Vue.component("mt-button", Button)
Vue.component("mt-header", Header)
Vue.component(Loadmore.name, Loadmore);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
new Vue({
  el: '#app',
  router:rt,
  store,
  //
  components: { App },
  template: '<App/>'
})
 