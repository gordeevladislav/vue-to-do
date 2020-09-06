import { v4 } from 'uuid';
import { groups, currentGroup } from '../mock';

export default {
  state: {
    groups,
    currentGroup
  },
  mutations: {
    createGroup (state, payload) {
      state.groups.push(payload)
    },
    setCurrentGroup (state, payload) {
      state.currentGroup = payload
    },
    updateGroup (state, payload) {
      state.groups = payload
    }
  },
  actions: {
    createGroup ({ commit }, payload) {
      const group = {
        name: payload,
        id: v4()
      }
      commit('createGroup', group);
      commit('setCurrentGroup', group.id);
    },

    removeGroup ({ commit, getters }, payload) {
      const groups = getters.groups;
      const [groupToRemove] = groups.filter(({ id })=> id === payload);

      const index = groups.indexOf(groupToRemove);
      groups.splice(index, 1);

      commit('updateGroup', groups);

      if (groups.length) {
        commit('setCurrentGroup', groups[0].id);
      }
    },

    setCurrentGroup ({ commit }, payload) {
      commit('setCurrentGroup', payload);
    }
  },
  getters: {
    groups (state) {
      return state.groups;
    },
    currentGroupId (state) {
      return state.currentGroup;
    }
  }
}