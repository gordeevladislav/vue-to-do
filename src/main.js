import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VuePackeryPlugin from 'vue-packery-plugin';

Vue.config.productionTip = false;

Vue.use(VuePackeryPlugin);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

