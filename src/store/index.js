import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'
import groups from './groups'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    groups
  }
})
