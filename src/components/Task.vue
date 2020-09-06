<template>
  <article class="task">
    <div class="task__header">
      <button
        class="task__closer fas fa-times"
        @click="$emit('on-closer-click')"
        type="button"
        aria-label="Delete task"
      />
      <button
        class="task__completer fa-check-circle far"
        :class="{'fas': task.completed, 'task__completer--done': task.completed}"
        @click="$emit('on-done-click')"
        type="button"
        aria-label="Mark completed"
      />
      <p class="task__title">
        {{ task.title }}
      </p>
    </div>
    <div class="task__body">
      <p class="task__text">{{ task.text }}</p>
      <button
        class="task__button-edit far fa-edit"
        type="button"
        @click="changeGroupMode = !changeGroupMode"
        aria-label="Change group"
      />

      <div class="task__modal" v-if="changeGroupMode">
        <h3 class="task__modal-title">Move to group</h3>
        <ul class="task__modal-list">
          <li
            v-for="(group, index) in groupsToChange"
            :key="index"
          >
            <button class="task__modal-button" @click="changeGroup(group.id)" type="button">
              {{ group.name }}
            </button>
          </li>
        </ul>
      </div>

    </div>
  </article>
</template>


<script>

export default {
  props: ['task'],
  data() {
    return {
      changeGroupMode: false
    }
  },
  computed: {
    groupsToChange() {
      return this.$store.getters.groups
        .filter(group => group.id !== this.task.groupId);
    }
  },
  methods: {
    changeGroup(groupId) {
      this.$store.dispatch('changeGroup', {
        task: this.task,
        groupId
      });
      this.changeGroupMode = false;
    }
  }
}

</script>

<style>
.task {
  position: relative;
  padding: 20px 0;

  background-color: white;
  border-radius: 8px;
  box-shadow: 3px 3px 10px 0px rgb(0 0 0 / 0.5);
}

.task__closer {
  position: absolute;
  top: 10px;
  right: 10px;

  padding: 3px 5px 1px 5px;

  font-size: 25px;
  color: dimgray;
  background-color: transparent;
  border: none;

  cursor: pointer;
}

.task__closer:hover {
  color: #434343;
}

.task__closer:active {
  color: #a4a4a4;
}

.task__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px 0 10px;
}

.task__completer {
  width: 50px;
  height: 50px;
  align-self: flex-start;
  margin-right: 10px;

  font-size: 33px;
  color: #aaaaaa;

  background-color: transparent;
  border: none;

  cursor: pointer;
}

.task__completer:hover {
  color: #848484;
}

.task__completer:active {
  color: #d0d0d0;
}

.task__completer--done {
  font-size: 40px;
  color: #5cb85c;
}

.task__completer--done:hover {
  color: #3d8b3d;
}

.task__completer--done:active {
  color: #80c780;
}

.task__title {
  display: inline-block;
  width: 78%;
  margin: 0;

  font-size: 20px;

  word-wrap: break-word;
}

.task__body {
  position: relative;
  padding: 0 20px;
}

.task__text {
  width: 100%;
}

.task__button-edit {
  position: absolute;
  bottom: -30px;
  right: 5px;
  font-size: 19px;
  color: gray;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.task__button-edit:hover {
  color: #aaaaaa;
}

.task__modal {
  position: absolute;
  bottom: -5px;
  right: 30px;
  padding: 10px 15px;
  background-color: #d0d0d0;
  border-radius: 5px;
}

.task__modal-title {
  font-size: 18px;
  margin: 0;
  margin-bottom: 7px;
}

.task__modal-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.task__modal-button {
  font-size: 17px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

</style>