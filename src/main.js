import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Axios from "axios";
import VueAxios from "vue-axios";
import { router } from "./router";
/* import vuetify from '@/plugins/vuetify' // path to vuetify export */


Vue.use(VueRouter);
Vue.use(VueAxios, Axios);


new Vue({
  router,
  /* vuetify, */
  render: h => h(App),
}).$mount('#app')
