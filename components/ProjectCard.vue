<template>
  <article class="project">
    <div class="project__image">
      <img :src="project.image" :alt="project.title" />
    </div>
    <div class="project__content">
      <h3>
        <nuxt-link :to="project.path">{{ project.title }}</nuxt-link>
      </h3>
      <p>{{ project.summary }}</p>
      <nuxt-link :to="project.path">View Projects</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.project {
  &__image {
    border-radius: 1rem;
    overflow: hidden;
  }

  &__content {
    padding: 2rem;
  }
}
</style>
