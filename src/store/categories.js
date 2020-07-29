export default {
  state: {
    categories: [
      { name: 'Срочные', id: 12345 },
      { name: 'Домашние', id: 102031 },
      { name: 'Рабочие', id: 81273127 },
    ],
    currentCategory: 12345
  },
  mutations: {
    createCategory (state, payload) {
      state.categories.push(payload)
    },
    setCurrentCategory (state, payload) {
      state.currentCategory = payload
    },
    updateCategory (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    createCategory ({ commit }, payload) {
      commit('createCategory', payload)
      commit('setCurrentCategory', payload.id)
    },
    deleteCategory ({ commit, getters }, payload) {
      const categories = getters.categories
      const categoryIndex = categories.indexOf(payload)
      categories.splice(categoryIndex, 1)

      commit('updateCategory', categories)

      if (categories.length) {
        commit('setCurrentCategory', categories[0].id)
      }
    },
    setCurrentCategory ({ commit }, payload) {
      commit('setCurrentCategory', payload)
    }
  },
  getters: {
    categories (state) {
      return state.categories
    },
    currentCategoryId (state) {
      return state.currentCategory
    }
  }
}