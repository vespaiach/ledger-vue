<script setup>
  import Spinner from './Spinner.vue';

  const props = defineProps({
    caption: String,
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    boxLess: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['click']);

  const handleClick = (evt) => {
    if (props.loading || props.disabled) return;
    emit('click', evt);
  };
</script>

<template>
  <button @click="handleClick" class="button" :class="{ box_less: boxLess, disabled }">
    <div v-if="loading" class="spinner_sheet">
      <Spinner :width="24" :height="24" />
    </div>
    <slot />
    <span v-text="caption"></span>
  </button>
</template>

<style scoped>
  .button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--button-text-color);
    cursor: pointer;
    overflow: hidden;
    border-radius: 4px;
    gap: 4px;
  }

  .button:not(.box_less) {
    padding: 0px 16px;
    height: 38px;
    border: 1px solid var(--button-border-color);
    background: var(--button-background-color);
  }

  .box_less {
    min-height: 38px;
    min-width: 38px;
    background: none;
    border: none;
  }

  .disabled {
    cursor: not-allowed;
    color: var(--disabled-color);
  }

  .spinner_sheet {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--curtain-background-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
