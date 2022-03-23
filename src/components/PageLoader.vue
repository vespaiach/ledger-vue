<script setup>
  import Spinner from './Spinner.vue';
</script>

<template>
  <div class="fullpage">
    <Spinner />
  </div>
</template>

<style scoped>
  .fullpage {
    width: 100vw;
    height: 100vh;
    background: var(--curtain-background-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
