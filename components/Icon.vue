<template>
  <svg
    v-if="type === 'arrowRight'"
    class="icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0Z" />
    <g>
      <path
        d="M4.48 12.73h14.99c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75H4.48c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Z"
      />
      <path
        d="M12.95 6.51l6.03 6.01v-1.07l-6.04 6.01c-.3.29-.3.76-.01 1.06 .29.29.76.29 1.06 0l6.03-6.02c.29-.3.29-.77 0-1.07l-6.04-6.02c-.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06Z"
      />
    </g>
  </svg>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
svg {
  fill: currentColor;
  margin-left: 1rem;
}
</style>
