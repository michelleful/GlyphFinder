<template>
  <div class="grid-item">
    <div class="gardiner-number">{{ hieroglyph.id }}</div>
    <div class="gardiner-sign egyptian">{{ hieroglyph.hieroglyph }}</div>
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
.gardiner-number {
  width: 30%;
  float: left;
}
.gardiner-sign {
  font-size: 400%;
  width: 70%;
  float: right;
}
</style>