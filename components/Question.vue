<template>
  <article class="faq">
    <p class="faq__question">
      {{ question }}
    </p>
    <p class="faq__answer">{{ answer }}</p>
  </article>
</template>

<script setup>
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});
</script>
