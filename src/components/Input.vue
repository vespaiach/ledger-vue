<script setup>
  import { useSlots, ref } from 'vue';

  defineProps({
    id: String,
    error: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    caption: String,
    type: String,
  });

  const slots = useSlots();

  const leftSpace = ref(!!slots.default?.());
</script>

<template>
  <label :html-for="id" class="input" :class="{ error, left_space: leftSpace }">
    <div class="caption">
      {{ caption }}
      <span class="error_text" v-if="error"> - {{ error }}</span>
    </div>
    <textarea :disabled="disabled" v-if="type === 'textarea'" :row="row" :id="{ id }" />
    <input :disabled="disabled" v-else :type="type" :id="id" />
    <slot></slot>
  </label>
</template>

<style scoped>
  .input {
    position: relative;
    width: 100%;
    display: block;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
  }

  .input input:disabled {
    cursor: not-allowed;
  }

  .caption {
    color: var(--secondary-text-color);
    font-size: 14px;
    line-height: 1;
    position: absolute;
    top: 8px;
    left: 16px;
  }

  .error_text {
    color: var(--error-text-color) !important;
  }

  .input.error input,
  .input.error textarea {
    border-color: var(--error-text-color) !important;
  }

  .input input,
  .input textarea {
    padding: 30px 18px 12px 16px;
    outline: none;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--border-color);
    transition: all 0.1s ease-in;
  }

  .input input:focus,
  .input textarea:focus {
    border: 1px solid var(--focus-border-color);
  }

  .input input:focus + :slotted(.addsin) {
    color: var(--primary-text-color);
  }

  .input :slotted(.addsin) {
    position: absolute;
    top: 28px;
    left: 15px;
    color: var(--secondary-text-color);
    min-width: 24px;
    min-height: 24px;
  }

  .input :slotted(.subsin) {
    position: absolute;
    top: 26px;
    right: 8px;
    color: var(--secondary-text-color);
    min-width: 24px;
    min-height: 24px;
  }

  .input.left_space input, 
  .input.left_space textarea {
    padding-left: 48px;
  }
</style>
