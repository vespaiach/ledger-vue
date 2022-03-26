<script setup>
  import { ref } from 'vue';
  import Button from './components/Button.vue';
  import Input from './components/Input.vue';
  import MessagePane from './components/MessagePane.vue';

  const messages = ref([
    { id: 'item1', message: 'I can fly', timeout: 3000, type: 'success' },
    { id: 'item2', message: 'I can fly', timeout: 3000, type: 'error' },
    { id: 'item3', message: 'I can fly', timeout: 3000, type: 'notification' },
  ]);

  let i = 3;
  const handleClick = () => {
    messages.value.push({ id: `item${++i}`, message: 'I can fly', timeout: 3000, type: 'notification' });
  };
  const handleRemove = (id) => {
    messages.value = messages.value.filter((m) => m.id !== id);
  };
</script>

<template>
  <Button @click="handleClick">test</Button>
  <message-pane :messages="messages" @remove="handleRemove" />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
