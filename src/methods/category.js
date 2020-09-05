import { v4 } from 'uuid';

export function createCategory() {
  const name = this.name.trim();

  if (name) {
    const newCategory = {
      name,
      id: v4()
    };

    this.$store.dispatch('createCategory', newCategory);
    this.name = '';
  }
}