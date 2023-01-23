<template>
  <article class="blog">
    <div class="blog__content">
      <h3>
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </h3>
      <p>{{ post.summary }}</p>
      <NuxtLink :to="post._path" class="read-more"
        >Read This Post <Icon type="arrowRight"
      /></NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
