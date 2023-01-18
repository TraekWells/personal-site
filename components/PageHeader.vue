<template>
  <header class="header">
    <div class="container container--narrow">
      <h1>
        <span class="eyebrow">{{ props.eyebrow }}</span
        >{{ props.title }}
      </h1>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  eyebrow: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
