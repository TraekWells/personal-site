<template>
  <article class="blog">
    <div class="blog__content">
      <h3>
        <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
      </h3>
      <p>{{ post.summary }}</p>
      <nuxt-link :to="post.path" class="read-more"
        >Read More <ArrowRightIcon aria-label="Arrow icon"></ArrowRightIcon
      ></nuxt-link>
    </div>
  </article>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowRightIcon,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.blog {
  max-width: 65rem;
  border-radius: 1rem;
  transition: 0.2s ease all;
  width: 100%;
  display: flex;
  z-index: 10;
  margin: 3rem 0;

  @include respond-to(phone) {
    flex-direction: column;
    padding: 3rem;
    background-color: var(--color-white);
  }

  &.purple {
    background-color: var(--color-primary-100);
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
