<template>
  <section class="groups">
    <div class="groups__actions">
      <label class="visually-hidden" for="new-group">
        Enter new group name
      </label>
      <input
        class="groups__input"
        v-model="name"
        @keydown.enter="create"
        type="text"
        placeholder="Add new group"
        id="new-group"
      />

      <app-button
        class="groups__button"
        @click="create"
        type="nav"
        text="Add"
        aria-label="Create new tasks group"
      />
    </div>

    <ul class="groups__list">
      <li
        class="groups__item"
        v-for="({name, id}) of groups"
        :key="id"
      >
        <a
          class="groups__link"
          :class="{'groups__link--active': id === currentGroupId}"
          @click.prevent="setCurrent(id)"
          href
        >
          {{ name }}
        </a>
        <button
          class="group__closer fas fa-times"
          @click="remove(id)"
          type="button"
          aria-label="Remove group"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from './UI/Button';

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters([
      'groups',
      'currentGroupId'
    ])
  },
  methods: {
    create () {
      const name = this.name.trim();
      if (name) {
        this.$store.dispatch('createGroup', name);
      }
    },
    setCurrent (id) {
      if (id !== this.currentGroupId) {
        this.$store.dispatch('setCurrentGroup', id);
      }
    },
    remove (id) {
      this.$store.dispatch('removeGroup', id);
      this.$store.dispatch('removeTasksByGroupId', id);
    },
  },
  components: {
    appButton: Button
  },
}

</script>

<style>
.groups {
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;

  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  padding: 30px 35px;

  background-color: snow;

  z-index: 10;
}

.groups__actions {
  display: flex;
  flex-direction: row;
}

.groups__input {
  flex-grow: 1;
  width: 50%;
  height: 40px;
  margin-right: 10px;
  padding: 0 10px;

  font-size: 18px;
  border: none;
  border-radius: 4px;

  background-color: #c6c6c6;
}

.groups__list {
  margin: 0;
  padding: 20px 0;
  list-style-type: none;
}

.groups__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.groups__button {
  width: 50px;
  height: 40px;
}

.group__closer {
  width: 30px;
  height: 30px;
  padding: 0;

  font-size: 22px;
  color: dimgray;
  background-color: white;
  border: none;

  cursor: pointer;
}

.group__closer:hover {
  color: #434343;
}

.group__closer:active {
  color: #a4a4a4;
}

.groups__link {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 25px;
  text-decoration: none;
  color: #010e18;
}

.groups__link:hover {
  color: #013e74;
}

.groups__link:active {
  color: #010b13;
}

.groups__link--active {
  font-weight: 700;
}

@media (max-width: 480px) {
  .groups {
    max-width: none;
  }

  .groups__input {
    width: 67%;
  }
}

</style>