import { v4 } from 'uuid';
import { filterTypes } from '../utils';

export function getFilteredTasks() {
  const thisCategoryTasks = this.tasks.filter(task => task.categoryId === this.currentCategoryId)

  switch (this.activeFilter) {
    case filterTypes.ALL:
      return thisCategoryTasks;
    case filterTypes.COMPLETED:
      return thisCategoryTasks.filter(({ completed }) => completed);
    case filterTypes.ACTIVE:
      return thisCategoryTasks.filter(({ completed }) => !completed);
    }
}

export function createTask() {
  const taskValue = this.value.trim();

  if (taskValue) {
    const task = {
      text: taskValue,
      id: v4(),
      completed: false,
      categoryId: this.currentCategoryId
    };

    this.$store.dispatch('createTask', task);
    this.value = '';
  }
}