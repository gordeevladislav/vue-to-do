<template>
  <ul class="tasks__filter-list">
    <li
      v-for="(filter, index) of filters"
      :key="index"
      class="tasks__filter-item"
      :class="{'tasks__filter-item--active': filter === activeFilter}"
    >
      <a
        class="tasks__filter-link"
        @click.prevent="$emit('click', filter)"
        href
      > {{ filter }}
      </a>
    </li>
  </ul>
</template>

<script>
import { filterTypes } from '../utils';

export default {
  props: ['activeFilter'],
  data () {
    return {
      filters: Object.values(filterTypes)
    }
  }
}
</script>

<style>

.tasks__filter-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: 0;
  padding: 0;
  padding-top: 4px;
  list-style-type: none;
}

.tasks__filter-item:not(.tasks__filter-item--active):hover {
  border-bottom: 3px dashed #a0afaf;
}

.tasks__filter-item--active {
  border-bottom: 3px dashed darkslategrey;
}

.tasks__filter-link {
  font-size: 22px;
  text-decoration: none;
  color: darkslategrey;
}

</style>