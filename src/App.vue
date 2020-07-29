<template>
  <div>
    <app-header
      @click="toggleDrower"
      :isDrowerOn="drower"
    />
    <main class="main">
        <app-backdrop v-if='drower' @click="toggleDrower" />
      <transition name="drower">
        <app-categories v-if="drower" />
      </transition>
      <app-task-list />
    </main>
  </div>
</template>

<script>
import Backdrop from './components/UI/Backdrop'
import Header from './components/Header'
import Categories from './components/Categories'
import TaskList from './components/TaskList'

export default {
  data () {
    return {
      drower: false
    }
  },
  methods: {
    toggleDrower () {
      this.drower = !this.drower
    }
  },
  components: {
    appTaskList: TaskList,
    appCategories: Categories,
    appBackdrop: Backdrop,
    appHeader: Header
  }
}
</script>

<style>
  body {
    min-width: 320px;
    margin: 0;
    font-family: 'Noto Sans JP', Arial, sans-serif;
    background-color: whitesmoke;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;

    white-space: nowrap;

    border: 0;

    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .main {
    max-width: 1700px;
    margin: 0 auto;
  }

.drower-enter-active {
  transition: all .3s ease;
}

.drower-leave-active {
  transition: all .3s ease;
}

.drower-enter,
.drower-leave-to {
  transform: translateX(-300px);
}

</style>
