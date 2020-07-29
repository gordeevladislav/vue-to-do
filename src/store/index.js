import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'
import categories from './categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks, categories
  }
})
