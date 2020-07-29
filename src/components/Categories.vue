<template>
  <section class="categories">
    <div class="categories__actions">
      <label class="visually-hidden" for="new-category">
        Enter new category name
      </label>
      <input
        class="categories__input"
        v-model="value"
        @keydown.enter="createCategory"
        type="text"
        placeholder="Add new category"
        id="new-category"
      />

      <app-button
        class="categories__button"
        @click="createCategory"
        :disabled="!value.trim()"
        type="nav"
        text="Add"
        aria-label="Create new tasks category"
      />
    </div>

    <ul class="categories__list">
      <li
        class="categories__item"
        v-for="category of categories"
        :key="category.id"
      >
        <a
          class="categories__link"
          :class="{'categories__link--active': isActive(category.id)}"
          @click.prevent="setCurrentCategory(category.id)"
          href
        >
          {{ category.name }}
        </a>
        <button
          class="category__closer fas fa-times"
          @click="deleteCategory(category)"
          type="button"
          aria-label="Delete category"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import Button from "./UI/Button";
import { getRandomNumber } from '../auxiliary'

export default {
  data() {
    return {
      value: ""
    }
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    },
    currentCategoryId () {
      return this.$store.getters.currentCategoryId
    }
  },
  methods: {
    createCategory () {
      const newCategory = {
        name: this.value.trim(),
        id: getRandomNumber()
      }

      this.$store.dispatch('createCategory', newCategory)
      this.value = ''
    },
    setCurrentCategory (id) {
      if (id !== this.currentCategoryId) {
        this.$store.dispatch("setCurrentCategory", id)
      }
    },
    isCategoryActive (id) {
      return id === this.currentCategoryId;
    },
    deleteCategory (category) {
      this.$store.dispatch("deleteCategory", category)
      this.$store.dispatch("deleteTasksByCategoriesId", category.id)
    },
    isActive (id) {
      return id === this.$store.getters.currentCategoryId
    }
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