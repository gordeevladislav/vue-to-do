<template>
  <ul class="filter__list">
    <li
      v-for="(filter, index) of filters"
      :key="index"
      class="filter__item"
      :class="{'filter__item--active': filter === activeFilter}"
    >
      <a
        class="filter__link"
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

.filter__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: 0;
  padding: 0;
  padding-top: 4px;
  list-style-type: none;
}

.filter__item:not(.filter__item--active):hover {
  border-bottom: 3px dashed #a0afaf;
}

.filter__item--active {
  border-bottom: 3px dashed darkslategrey;
}

.filter__link {
  font-size: 22px;
  text-decoration: none;
  color: darkslategrey;
}

</style>