<template>
  <section class="tasks">
    <h2 class="visually-hidden">Task list</h2>
    <div class="tasks__actions">
      <div class="tasks__new-task-actions">
        <label class="visually-hidden" for="new-task">
          Add new task
        </label>
        <input
          class="tasks__input"
          v-model="value"
          @keydown.enter="createTask"
          type="text"
          placeholder="Add new task"
          id="new-task"
        />
        <app-button
          class="tasks__add-button"
          text="Add"
          type="primary"
          @click="createTask"
          aria-label="Создать задачу"
        />
      </div>

      <app-task-filter
        @click="setActiveFilter"
        :activeFilter="activeFilter"
      />
    </div>
    <ul
      class="tasks__list"
      v-packery='{
        itemSelector: ".tasks__item",
        percentPoistion: true,
        gutter: ".gutter-sizer"
      }'
    >
    <div class="gutter-sizer"></div>
    <app-task
      v-for="(task, index) of filteredTasks"
      :key="index"

      class="tasks__item"
      :item="task"
      @onCloserClick="deleteTask(task)"
      @onDoneClick="toggleStatus(task)"
      v-packery-item
      aria-label="Delete task"
    />
    </ul>

  </section>
</template>

<script>
import Button from './UI/Button'
import Task from './Task'
import TaskFilter from "./TaskFilter";
import { getRandomNumber } from '../auxiliary'

export default {
  data () {
    return {
      value: '',
      activeFilter: 'all'
    }
  },
  computed: {
    filteredTasks () {
      const setup = {
        active: false,
        completed: true,
      }

      const currentCategoryId = this.$store.getters.currentCategoryId

      const tasksOfCategory = this.$store.getters.tasks
        .filter(({ categoryId }) => categoryId === currentCategoryId)

      const filtered = this.activeFilter === "all"
        ? tasksOfCategory
        : tasksOfCategory.filter(({ completed }) => completed === setup[this.activeFilter])

      return filtered
    }
  },
  methods: {
    createTask () {
      const input = document.querySelector('.tasks__input');
      const taskValue = this.value.trim();

      if (!taskValue) {
        return;
      }

      const task = {
        text: this.value.trim(),
        id: getRandomNumber(),
        completed: false,
        categoryId: this.$store.getters.currentCategoryId
      }

      this.$store.dispatch('createTask', task)
      this.value = ''
      input.focus()
    },
    deleteTask (task) {
      this.$store.dispatch('deleteTask', task)
    },
    setActiveFilter (filter) {
      this.activeFilter = filter
    },
    toggleStatus (task) {
      this.$store.dispatch('toggleStatus', task)
    },
  },
  mounted () {
    const input = document.querySelector('.tasks__input');
    input.focus();
  },

  components: {
    appTask: Task,
    appButton: Button,
    appTaskFilter: TaskFilter
  },
}
</script>

<style>

.tasks {
  width: 100%;
}

.tasks__actions {
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-right: 2%;
  padding-left: 2%;
}

.tasks__new-task-actions {
  display: flex;
  flex-direction: row;
  width: 23.5%;
  margin-right: 2%;
}

.tasks__input {
  width: 100%;
  height: 40px;
  margin-right: 15px;
  padding: 0 10px;

  font-size: 18px;
  border: 1px solid #fff5ee;
  border-radius: 4px;
}

.tasks__list {
  margin: 0;
  padding: 2.307%;

  list-style-type: none;
}

.tasks__add-button {
  width: 100px;
  height: 40px;
}

.tasks__item {
  width: 18%;
}

.gutter-sizer {
  width: 2%;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 1400px) {
  .tasks__new-task-actions {
    width: 32%;
  }

  .tasks__item {
    width: 25.5%;
  }
}

@media (max-width: 1170px) {
  .tasks__new-task-actions {
    width: 44%;
    margin-right: 5%;
  }

  .tasks__item {
    width: 37%;
  }

  .gutter-sizer {
    width: 4%;
  }

  .tasks__actions {
    padding-right: 4%;
    padding-left: 4%;
  }
}

@media (max-width: 690px) {
  .tasks__actions {
    flex-direction: column;
  }

  .tasks__new-task-actions {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .filter__list {
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;
  }

  .tasks__item {
    width: 33%;
  }

  .gutter-sizer {
    width: 6%;
  }

  .tasks__actions {
    padding-right: 6%;
    padding-left: 6%;
  }
}

@media (max-width: 485px) {
  .tasks__list {
    padding: 5%;
  }
  .tasks__item {
    width: 76%;
  }

  .gutter-sizer {
    width: 5%;
  }

  .tasks__actions {
    padding-right: 5%;
    padding-left: 5%;
  }
}

@media (max-width: 350px) {
  .tasks__item {
    width: 70%;
  }
}
</style>