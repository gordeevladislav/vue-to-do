<template>
  <div class="popup">
    <button
      class="popup__closer fas fa-times"
      @click="$emit('click')"
      type="button"
      aria-label="Close popup"
    />
    <div class="popup__container">
      <label class="popup__label" for="task-title">Название задачи</label>
      <input class="popup__input popup__input--title" type="text" name="" id="task-title" v-model="title">
    </div>
    <div class="popup__container">
      <label class="popup__label" for="task-text">Текст задачи</label>
      <textarea class="popup__input popup__input--text" id="task-text" cols="30" rows="10" v-model="text"></textarea>
    </div>
    <app-button
      class="popup__button-add"
      @click="create"
      :disabled="!(title.trim() && text.trim())"
      text="Add new task"
      type="add"
      aria-label="Create new task"
    />
  </div>
</template>

<script>
import Button from './UI/Button';

export default {
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    create () {
      this.$store.dispatch('createTask', {
        text: this.text,
        title: this.title
      });

      this.title = '';
      this.text = '';
    },
  },
  components: {
    appButton: Button
  }
}
</script>

<style>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;

  box-sizing: border-box;
  width: 500px;
  margin-top: -211px;
  margin-left: -250px;
  padding: 25px 40px;

  background-color: white;
  border-radius: 7px;
  box-shadow: 3px 3px 13px 0px rgb(0 0 0 / 0.5);
}

.popup__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.popup__closer {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  padding: 0;

  font-size: 30px;
  color: dimgray;
  background-color: white;
  border: none;

  cursor: pointer;
}

.popup__label {
  margin-bottom: 10px;

  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  color: #010e18;
}

.popup__input {
  padding: 0 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  border: 1px solid #808080;
  border-radius: 4px;
}

.popup__input--title {
  height: 30px;
}

.popup__input--text {
  box-sizing: border-box;
  width: 100%;
  padding: 6px 10px;
}

@media (max-width: 515px) {
  .popup {
    top: 70px;
    left: 0;
    right: 0;

    width: 100%;
    margin: 0;
  }
}

</style>