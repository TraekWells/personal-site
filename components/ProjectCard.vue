<template>
  <article class="project">
    <div class="project__image">
      <nuxt-img
        format="webp"
        :src="project.previewImage"
        :alt="project.title"
        loading="lazy"
      />
    </div>
    <div class="project__content">
      <h3>
        <NuxtLink :to="project._path">{{ project.title }}</NuxtLink>
      </h3>
      <p>{{ project.summary }}</p>
      <NuxtLink :to="project._path" class="read-more"
        >Project Details <Icon type="arrowRight" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
