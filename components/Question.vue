<template>
  <article class="faq" :class="{ open: isOpen }">
    <p class="faq__question" @click="toggleQuestion">
      {{ question }}
      <Icon type="chevron" />
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

const isOpen = ref(false);

const toggleQuestion = () => {
  console.log(isOpen.value);
  isOpen.value = !isOpen.value;
};
</script>
