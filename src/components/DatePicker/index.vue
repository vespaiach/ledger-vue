<script setup>
  defineProps({
    padding: {
      type: Number,
      default: 10,
    },
    start: Date,
  });
</script>

<template>
  <div class="container"></div>
</template>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    gap: 8px;

    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .container::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
</style>
