import { v4 } from 'uuid';
import { tasks } from '../mock';

export default {
  state: {
    tasks
  },
  mutations: {
    createTask (state, payload) {
      state.tasks.push(payload)
    },
    updateTasks (state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    createTask ({ commit, getters }, { title, text }) {
      const task = {
        title,
        text,
        id: v4(),
        completed: false,
        groupId: getters.currentGroupId
      };

      commit('createTask', task);
    },

    deleteTask({ commit, getters }, payload) {
      const tasks = getters.tasks;
      const taskIndex = tasks.indexOf(payload);
      tasks.splice(taskIndex, 1);

      commit('updateTasks', tasks);
    },

    toggleStatus ({ commit, getters }, payload) {
      const tasks = getters.tasks;
      const taskIndex = tasks.indexOf(payload);

      payload.completed = !payload.completed;
      tasks.splice(taskIndex, 1, payload);

      commit('updateTasks', tasks);
    },

    removeTasksByGroupId ({ commit, getters }, payload) {
      const tasksWithoutToRemove = getters.tasks
        .filter(task => task.groupId !== payload);

      commit('updateTasks', tasksWithoutToRemove);
    },

    changeGroup ({ commit, getters }, { task, groupId }) {
      const tasks = getters.tasks;
      const taskIndex = tasks.indexOf(task);

      task.groupId = groupId;
      tasks.splice(taskIndex, 1, task);

      commit('updateTasks', tasks);
    }
  },
  getters: {
    tasks (state) {
      return state.tasks;
    }
  }
}