import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VuePackeryPlugin from 'vue-packery-plugin'
import VueDraggabillyPlugin from 'vue-packery-draggabilly-plugin'

Vue.config.productionTip = false

Vue.use(VuePackeryPlugin)
Vue.use(VueDraggabillyPlugin)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

