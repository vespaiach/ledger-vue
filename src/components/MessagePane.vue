<script setup>
  import MessageElement from './Message.vue';

  defineProps({
    messages: {
      type: Array,
      default: [],
    },
  });

  const emit = defineEmits(['remove']);
</script>

<template>
  <ul class="pane">
    <transition-group name="list" appear>
      <li v-for="message in messages" :key="message.id">
        <message-element v-bind="message" @close="(id) => emit('remove', id)" />
      </li>
    </transition-group>
  </ul>
</template>

<style scoped>
  .pane {
    display: flex;
    flex-flow: column-reverse nowrap;
    gap: 8px;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 16px);
    padding: 8px;
    margin: 0;
    list-style: none;
  }

  .list-enter-active {
    transition: transform 180ms ease-in;
  }

  .list-enter-from {
    transform: scale(0) translate(-50%, -50%);
  }

  .list-enter-to {
    transform: scale(1) translate(0, 0, 0);
  }

  .list-leave-active {
    transition: transform 280ms ease-in;
  }

  .list-leave-to {
    transform: scale(0) translate(50%, 50%);
  }
</style>
