<template>
  <section class="categories">
    <div class="categories__actions">
      <label class="visually-hidden" for="new-category">
        Enter new category name
      </label>
      <input
        class="categories__input"
        v-model="name"
        @keydown.enter="create"
        type="text"
        placeholder="Add new category"
        id="new-category"
      />

      <app-button
        class="categories__button"
        @click="create"
        type="nav"
        text="Add"
        aria-label="Create new tasks category"
      />
    </div>

    <ul class="categories__list">
      <li
        class="categories__item"
        v-for="({name, id}) of categories"
        :key="id"
      >
        <a
          class="categories__link"
          :class="{'categories__link--active': id === currentCategoryId}"
          @click.prevent="setCurrent(id)"
          href
        >
          {{ name }}
        </a>
        <button
          class="category__closer fas fa-times"
          @click="remove(id)"
          type="button"
          aria-label="Remove category"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { createCategory } from '../methods/category';
import Button from './UI/Button';

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters([
      'categories',
      'currentCategoryId'
    ])
  },
  methods: {
    create () {
      createCategory.call(this);
    },
    setCurrent (id) {
      if (id !== this.currentCategoryId) {
        this.$store.dispatch('setCurrentCategory', id);
      }
    },
    remove (id) {
      this.$store.dispatch('removeCategory', id);
      this.$store.dispatch('removeTasksByCategoryId', id);
    },
  },
  components: {
    appButton: Button
  },
}

</script>

<style>
.categories {
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

.categories__actions {
  display: flex;
  flex-direction: row;
}

.categories__input {
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

.categories__list {
  margin: 0;
  padding: 20px 0;
  list-style-type: none;
}

.categories__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.categories__button {
  width: 50px;
  height: 40px;
}

.category__closer {
  width: 30px;
  height: 30px;
  padding: 0;

  font-size: 22px;
  color: dimgray;
  background-color: white;
  border: none;

  cursor: pointer;
}

.category__closer:hover {
  color: #434343;
}

.category__closer:active {
  color: #a4a4a4;
}

.categories__link {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 25px;
  text-decoration: none;
  color: #010e18;
}

.categories__link:hover {
  color: #013e74;
}

.categories__link:active {
  color: #010b13;
}

.categories__link--active {
  font-weight: 700;
}

@media (max-width: 480px) {
  .categories {
    max-width: none;
  }

  .categories__input {
    width: 67%;
  }
}

</style>