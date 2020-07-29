export default {
  state: {
    tasks: [
      { text: 'Выучить React', id: 2, completed: false, categoryId: 12345 },
      { text: 'Выучить Vue', id: 3, completed: false, categoryId: 12345 },
      { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illum ab itaque possimus quisquam tempora corporis cupiditate placeat velit voluptatibus. Ab adipisci sapiente optio aliquam ratione accusamus quas deleniti obcaecati.',
        id: 4, completed: false, categoryId: 12345 },
      { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione possimus fugit reprehenderit eveniet rem officia quia excepturi tempore facilis molestiae quidem natus, iure delectus, officiis eum suscipit odio cum?',
        id: 12, completed: false, categoryId: 12345 },
    ]
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
    createTask ({ commit }, payload) {
      commit('createTask', payload)
    },
    deleteTask({ commit, getters }, payload) {
      const tasks = getters.tasks
      const taskIndex = tasks.indexOf(payload)
      tasks.splice(taskIndex, 1)

      commit('updateTasks', tasks)
    },
    toggleStatus ({ commit, getters }, payload) {
      const tasks = getters.tasks
      const taskIndex = tasks.indexOf(payload)
      payload.completed = !payload.completed
      tasks.splice(taskIndex, 1, payload)

      commit('updateTasks', tasks)
    },
    deleteTasksByCategoriesId ({ commit, getters }, payload) {
      const tasksWithoutDeleted = getters.tasks
        .filter(task => task.categoryId !== payload)

      commit('updateTasks', tasksWithoutDeleted)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    }
  }
}