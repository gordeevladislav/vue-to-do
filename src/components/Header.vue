<template>
  <header class="header">
    <div class="header__container">
      <button
        class="header__toggle fas"
        :class="{ 'fa-times': isDrowerOn, 'fa-bars': !isDrowerOn }"
        @click="$emit('drower-toggle-click')"
        type="button"
        aria-label="Toggle drower"
      />
      <h1 class="header__title">Vue To Do</h1>
    </div>
    <app-button
      class="header__add-button"
      @click="$emit('add-button-click')"
      text="Create new task"
      type="primary"
      aria-label="Создать задачу"
    />
  </header>
</template>

<script>
import Button from './UI/Button';

export default {
  props: ['isDrowerOn'],
  components: {
    appButton: Button
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;

  background-color: teal;

  cursor: default;
}

.header__container {
  display: flex;
  align-items: center;
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

.header__add-button {
  box-sizing: border-box;
  padding: 10px 20px;
  height: 45px;
  font-size: 20px;
}

.header__title {
  color: white;
}

@media (max-width: 500px) {
  .header__title {
    display: none;
  }
}
</style>