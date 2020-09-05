<template>
  <header class="header">
    <button
      class="header__toggle fas"
      :class="{ 'fa-times': isDrowerOn, 'fa-bars': !isDrowerOn }"
      @click="$emit('click')"
      type="button"
      aria-label="Toggle drower"
    />
    <h1 class="header__title">Vue To Do</h1>
  </header>
</template>

<script>
export default {
  props: ['isDrowerOn']
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 30px;

  background-color: teal;

  cursor: default;
}

.header__toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 20px;

  font-size: 30px;
  color: white;

  background-color: transparent;
  border: none;

  cursor: pointer;
}

.header__title {
  color: white;
}
</style>