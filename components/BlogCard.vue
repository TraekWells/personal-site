<template>
  <article class="blog">
    <img
      class="blog__image"
      :src="post.previewImage"
      :alt="`${post.title} image`"
    />
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
  position: relative;
  max-width: 75rem;
  border-radius: 1rem;
  transition: 0.2s ease all;
  width: 100%;
  display: flex;
  z-index: 10;
  margin: 5rem 0;

  @include respond-to(phone) {
    flex-direction: column;
    padding: 3rem;
    background-color: var(--color-white);
  }

  &::before {
    position: absolute;
    content: '';
    background-color: var(--color-white);
    top: -3rem;
    bottom: -3rem;
    right: -3rem;
    left: 12.5rem;
    height: calc(100% + 6rem);
    width: calc(100% - 4.5rem);
    border-radius: var(--border-radius-sm);
    z-index: -1;

    @include respond-to(phone) {
      display: none;
    }
  }

  &__image {
    margin-right: 4.5rem;
    height: 25rem;
    width: 25rem;
    object-fit: cover;
    border-radius: var(--border-radius-sm);

    @include respond-to(phone) {
      display: none;
    }
  }

  &.purple {
    background-color: var(--color-primary-100);
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
