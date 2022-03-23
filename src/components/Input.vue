<script setup>
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
</script>

<template>
  <label :html-for="id" class="input" :class="{ error, disabled }">
    <div class="caption">
      {{ caption }}
      <span class="error" v-if="error"> - {{ error }}</span>
    </div>
    <text v-if="type === 'textarea'" :row="row" :id="{ id }" />
    <input v-else :type="type" :id="{ id }" />
    <slot name="add-ins"></slot>
    <slot name="subfix"></slot>
  </label>
</template>

<style scoped></style>
