<template>
  <article class="testimonial">
    <p>{{ body }}</p>
    <div class="testimonial__author">
      <img
        v-if="authorImage"
        :src="authorImage"
        :alt="`Testimonial from ${authorName}`"
        class="testimonial__author-image"
      />
      <p>{{ authorName }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  body: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
  },
  authorName: {
    type: String,
    required: true,
  },
});
</script>
