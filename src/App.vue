<template>
  <div>
    <app-header
      @drower-toggle-click="drower = !drower"
      @add-button-click="popup = true"
      :isDrowerOn="drower"
    />
    <main class="main">
      <app-backdrop v-if="drower" @click="drower = !drower" />
      <transition name="drower">
        <app-groups v-if="drower" />
      </transition>
      <app-task-board />
      <app-popup v-if="popup" @click="popup = false" />
    </main>
  </div>
</template>

<script>
import Popup from './components/Popup';
import Backdrop from './components/UI/Backdrop';
import Header from './components/Header';
import Groups from './components/Groups';
import Board from './components/Board';

export default {
  data () {
    return {
      drower: false,
      popup: false
    }
  },
  components: {
    appTaskBoard: Board,
    appGroups: Groups,
    appBackdrop: Backdrop,
    appHeader: Header,
    appPopup: Popup
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
