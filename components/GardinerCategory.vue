<template>
  <div class="gardiner-category">
    <h2 class="category-name">{{ category }}: {{ categoryName }}</h2>
    <div class="gardiner-category grid-container">
      <GardinerSign v-for="hieroglyph in hieroglyphs" :hieroglyph="hieroglyph" :key="hieroglyph.id"></GardinerSign>
    </div>
  </div>
</template>

<script>
import Categories from "~/data/gardinerCategories.json";
import GardinerSign from "~/components/GardinerSign.vue";

export default {
  components: { GardinerSign },
  props: {
    category: String,
    hieroglyphs: Array
  },
  computed: {
    categoryName() {
      return Categories[this.category];
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
.category-name {
  margin-top: 2em;
  margin-bottom: 0.6em;
}
</style>