<template>
  <div class="infobox">
    <div class="title" @click="isOpen = !isOpen">
      <h3>
        {{ title }}
        <span v-if="isOpen">▲</span>
        <span v-if="!isOpen">▼</span>
      </h3>
    </div>
    <div class="info" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.infobox {
  margin-top: 2em;
}
.title {
  background: #fab779;
  line-height: 2;
  vertical-align: middle;
  font-size: 100%;
  padding-left: 1em;
  padding-right: 1em;
}
.info {
  background: #f8d8bb;
  padding: 1em;
}
.info p,
.info ul {
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}
.info ul li {
  list-style-type: none;
}
.info ul li:before {
  content: "𓇳";
  font-weight: bold;
}
</style>