<template>
  <ul class="filter__list">
    <li
      v-for="filter of filters"
      :key="filter.id"
      class="filter__item"
      :class="{'filter__item--active': isActive(filter.text)}"
    >
      <a
        class="filter__link"
        @click.prevent="$emit('click', filter.value)"
        href
      > {{ filter.text }}
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  props: ['activeFilter'],
  data () {
    return {
      filters: [
        { value: "all", text: "All", id: 1 },
        { value: "completed", text: "Completed", id: 2 },
        { value: "active", text: "Active", id: 3 }
      ],
    }
  },
  methods: {
    isActive (filter) {
      return filter.toLowerCase() === this.activeFilter
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