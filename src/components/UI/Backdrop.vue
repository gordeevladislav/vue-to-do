<template>
  <div
    class="backdrop"
    @click="$emit('click')"
  ></div>
</template>

<style>
.backdrop {
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.7);

  z-index: 5;
}
</style>