import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Axios from "axios";
import VueAxios from "vue-axios";
import { router } from "./router";


Vue.use(VueRouter);
Vue.use(VueAxios, Axios);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
