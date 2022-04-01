<script setup>
  import Button from './Button.vue';
  import CloseIcon from './icons/Close.vue';
  import SuccessIcon from './icons/Check.vue';
  import InfoIcon from './icons/Information.vue';
  import ErrorIcon from './icons/Exclamation.vue';
  import { onMounted } from '@vue/runtime-core';

  const props = defineProps({
    id: String,
    message: String,
    type: String,
    timeout: {
      type: Number,
      default: 3000,
    },
  });

  onMounted(() => {
    setTimeout(() => emit('close', props.id), props.timeout);
  });

  const emit = defineEmits(['close']);
</script>

<template>
  <article :id="id" class="message_sheet" :class="type">
    <success-icon v-if="type === 'success'" />
    <info-icon v-if="type === 'notification'" />
    <error-icon v-if="type === 'error'" />
    <p>{{ message }}</p>
    <Button box-less @click="(evt) => emit('close', id)">
      <close-icon />
    </Button>
  </article>
</template>

<style scoped>
  .message_sheet {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    border-radius: 4px;
    gap: 18px;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.43;
  }

  .message_sheet.notification {
    background: var(--notification-background-color);
    color: var(--message-text-color);
  }

  .message_sheet.error {
    background: var(--error-background-color);
    color: var(--message-text-color);
  }

  .message_sheet.success {
    background: var(--success-background-color);
    color: var(--message-text-color);
  }

  .message_sheet p {
    margin: 0;
  }

  .message_sheet button {
    margin: 0;
    margin-left: auto;
    width: 28px;
    height: 28px;
  }

  .message_sheet svg {
    flex-shrink: 0;
  }

  .message_sheet button svg {
    color: white;
  }
</style>
