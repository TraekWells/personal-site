<template>
  <article class="project">
    <div class="project__image">
      <img :src="project.previewImage" :alt="project.title" />
    </div>
    <div class="project__content">
      <h3>
        <nuxt-link :to="project.path">{{ project.title }}</nuxt-link>
      </h3>
      <p>{{ project.summary }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
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

  &:hover {
    svg {
      transform: translateX(2rem);
    }
  }
}
</style>
