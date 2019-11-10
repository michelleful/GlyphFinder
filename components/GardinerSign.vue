<template>
  <div class="grid-item">
    <span class="gardiner-number">{{ hieroglyph.id }}</span>
    <span class="gardiner-sign">{{ hieroglyph.hieroglyph }}</span>
  </div>
</template>

<script>
export default {
  props: {
    hieroglyph: Object
  }
};
</script>

<style scoped>
.gardiner-sign {
  font-size: 400%;
  font-family: "Aegyptus", "Segoe UI Historic", "Noto Sans Egyptian Hieroglyphs",
    "sans-serif";
}
</style>