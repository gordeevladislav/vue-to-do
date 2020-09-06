import { v4 } from 'uuid';
import { categories, currentCategory } from '../mock';

export default {
  state: {
    categories,
    currentCategory
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
      const category = {
        name: payload,
        id: v4()
      }
      commit('createCategory', category);
      commit('setCurrentCategory', category.id);
    },

    removeCategory ({ commit, getters }, payload) {
      const categories = getters.categories;
      const [categoryToRemove] = categories.filter(({ id })=> id === payload);

      const index = categories.indexOf(categoryToRemove);
      categories.splice(index, 1);

      commit('updateCategory', categories);

      if (categories.length) {
        commit('setCurrentCategory', categories[0].id);
      }
    },

    setCurrentCategory ({ commit }, payload) {
      commit('setCurrentCategory', payload);
    }
  },
  getters: {
    categories (state) {
      return state.categories;
    },
    currentCategoryId (state) {
      return state.currentCategory;
    }
  }
}