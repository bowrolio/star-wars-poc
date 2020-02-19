import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';

// Load and register layout templates; allows standard components (header, footer) to load for all views
import './layouts';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// combine the store and router
sync(store, router);

// Disable the annoying production tip
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app');
