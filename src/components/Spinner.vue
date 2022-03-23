<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 50,
      },
      height: {
        type: Number,
        default: 50,
      },
    },
  };
</script>

<template>
  <svg class="spinner" viewBox="0 0 50 50" :width="width" :height="height">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
  </svg>
</template>

<style scoped>
  .spinner {
    animation: rotate 1.5s linear infinite;
  }

  .path {
    stroke: rgb(25, 118, 210);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>
