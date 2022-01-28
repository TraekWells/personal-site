<template>
  <article class="blog">
    <div class="blog__content">
      <h3>
        <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
      </h3>
      <p>{{ post.summary }}</p>
      <nuxt-link :to="post.path" class="read-more"
        >Read This Post <ArrowRightIcon aria-label="Arrow icon"></ArrowRightIcon
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
