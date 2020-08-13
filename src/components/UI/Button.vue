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
/* .button {
  box-sizing: border-box;


} */

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
  background-color: #00b3b3;
  color: white;
}

.button--primary:hover {
  background-color: #009f9f;
}

.button--primary:active {
  background-color: #007f7f;
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



</style>