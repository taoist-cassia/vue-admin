import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;


import * as Api from './api/api'//寻找文件post
import * as ApiGet from './api/apiGet'//get

Vue.prototype.$api = Api;
Vue.prototype.$apiGet = ApiGet;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
