<template>
  <article class="blog">
    <h3>
      <nuxt-link :to="blog.path">{{ blog.title }}</nuxt-link>
    </h3>
    <p>{{ blog.summary }}</p>
    <a :href="blog.path" class="read-more"
      >Read More <ArrowRightIcon></ArrowRightIcon
    ></a>
  </article>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowRightIcon,
  },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.blog {
  background-color: var(--color-white);
  max-width: 55rem;
  border-radius: 1rem;
  padding: 3rem;
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
