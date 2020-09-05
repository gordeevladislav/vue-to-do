<template>
  <li
    class="task"
    :class="{'task--important': item.important}"
  >
    <button
      class="task__closer fas fa-times"
      @click="$emit('on-closer-click')"
      type="button"
      aria-label="Delete task"
    />
    <div class="task__wrapper">
      <button
        class="task__completer fa-check-circle far"
        :class="{'fas': item.completed, 'task__completer--done': item.completed}"
        @click="$emit('on-done-click')"
        type="button"
        aria-label="Mark completed"
      />
      <p class="task__text">
        {{ item.text }}
      </p>
    </div>
  </li>
</template>


<script>

export default {
  props: ['item']
}

</script>

<style>
.task {
  position: relative;
  padding: 20px 50px 20px 10px;

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

.task__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.task__text {
  display: inline-block;
  width: 78%;
  margin: 0;

  font-size: 20px;

  word-wrap: break-word;
}
</style>