// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

Vue.config.productionTip = false;

/* eslint-disable */
// tslint:disable
new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App },
});
