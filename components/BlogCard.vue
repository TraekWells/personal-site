<template>
  <article class="blog">
    <h3>
      <nuxt-link :to="blog.path">{{ blog.title }}</nuxt-link>
    </h3>
    <p>{{ blog.summary }}</p>
    <nuxt-link :to="blog.path">Read More</nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.blog {
  background-color: var(--color-white);
  max-width: 55rem;
  border-radius: 1rem;
  padding: 2rem;
  transition: 0.2s ease all;
  width: 100%;

  &.purple {
    background-color: var(--color-primary-100);
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
