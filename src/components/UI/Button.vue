<template>
  <button
    :class='"button " + getModifier'
    @click="$emit('click')"
    type="button"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  props: ['text', 'type'],
  computed: {
    getModifier () {
      return this.type ? `button--${this.type}` : ""
    }
  }
}
</script>

<style>
.button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  text-decoration: none;
  font-weight: 700;
  color:#ffffff;

  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.button--primary {
  background-color: #00c9c9;
  /* background-color: ?; */
  color: white;
}

.button--primary:hover {
  background-color: #00a1a1;
}

.button--primary:active {
  background-color: #00a1a1;
}

.button--primary:disabled {
  background-color: cadetblue;
}

.button--nav {
  background-color: #00944a;
  color: white;
}

.button--nav:hover {
  background-color: #00b95d;
}

.button--nav:active {
  background-color: #00944a;
}

.button--nav:disabled {
  background-color: #80d390;
}

.button--add {
  padding: 10px 15px;
  background-color: #003153;
}

.button--add:hover {
  background-color: #004c82;
}

.button--add:active {
  background-color: #002742;
}

.button--add:disabled {
  opacity: 0.4;
}
</style>