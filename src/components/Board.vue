<template>
  <section class="tasks">
    <h2 class="visually-hidden">Task list</h2>
    <div class="tasks__filter">
      <div class="tasks__filter-input-container">
        <label class="visually-hidden" for="find-task">
          Find task by title
        </label>
        <input
          class="tasks__filter-input"
          v-model="taskTitle"
          type="text"
          placeholder="Find by title"
          id="find-task"
        />
      </div>

      <app-filter-list
        @click="setActiveFilter"
        :activeFilter="activeFilter"
      />
    </div>
    <div
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
        :task="task"
        @on-closer-click="remove(task)"
        @on-done-click="toggleStatus(task)"
        v-packery-item
        aria-label="Delete task"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { filterTypes } from '../utils';
import Task from './Task';
import FilterList from "./FilterList";

export default {
  data() {
    return {
      taskTitle: '',
      activeFilter: "all"
    }
  },
  computed: {
    ...mapGetters([
      'currentGroupId',
      'tasks'
    ]),
    filteredTasks() {
      // Filter by group
      let result = this.tasks
        .filter(task => task.groupId === this.currentGroupId)

      // Filter by status
      switch (this.activeFilter) {
        case filterTypes.COMPLETED:
          result = result.filter(task => task.completed);
          break;
        case filterTypes.ACTIVE:
          result = result.filter(task => !task.completed);
      }

      // Filter by title
      if (this.taskTitle.trim() && result.length) {
        result = result.filter(task => {
          const str = task.title.toLowerCase();
          const substr = this.taskTitle.trim().toLowerCase();
          return str.includes(substr);
        });
      }

      return result;
    }
  },
  methods: {
    remove (task) {
      this.$store.dispatch('deleteTask', task);
    },
    setActiveFilter (filter) {
      this.activeFilter = filter;
    },
    toggleStatus (task) {
      this.$store.dispatch('toggleStatus', task);
    },
  },
  components: {
    appTask: Task,
    appFilterList: FilterList
  },
}
</script>

<style>

.tasks {
  width: 100%;
}

.tasks__filter {
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-right: 2%;
  padding-left: 2%;
}

.tasks__filter-input-container {
  display: flex;
  flex-direction: row;
  width: 23.5%;
  margin-right: 2%;
}

.tasks__filter-input {
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

.tasks__item {
  width: 18%;
}

.gutter-sizer {
  width: 2%;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 1400px) {
  .tasks__filter-input-container {
    width: 32%;
  }

  .tasks__item {
    width: 30%;
  }
}

@media (max-width: 1170px) {
  .tasks__filter-input-container {
    width: 44%;
    margin-right: 5%;
  }

  .tasks__item {
    width: 45%;
  }

  .gutter-sizer {
    width: 4%;
  }

  .tasks__filter {
    padding-right: 4%;
    padding-left: 4%;
  }
}

@media (max-width: 690px) {
  .tasks__filter {
    flex-direction: column;
  }

  .tasks__filter-input-container {
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
    width: 43%;
  }

  .gutter-sizer {
    width: 6%;
  }

  .tasks__filter {
    padding-right: 6%;
    padding-left: 6%;
  }
}

@media (max-width: 485px) {
  .tasks__list {
    padding: 5%;
  }
  .tasks__item {
    width: 90%;
  }

  .gutter-sizer {
    width: 5%;
  }

  .tasks__filter {
    padding-right: 5%;
    padding-left: 5%;
  }
}
</style>