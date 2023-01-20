<template>
  <div class="fancy-header">
    <HeadingDots />
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
