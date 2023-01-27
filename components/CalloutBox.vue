<template>
  <div class="callout-block">
    <div class="callout-block__icon">
      <Icon :type="icon" />
    </div>
    <div class="callout-block__details">
      <p class="callout-block__title">{{ title }}</p>
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
</script>
