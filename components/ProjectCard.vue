<template>
  <article class="project">
    <div class="project__image">
      <nuxt-picture
        :src="project.previewImage"
        :alt="project.title"
        loading="lazy"
      />
    </div>
    <div class="project__content">
      <h3>
        <nuxt-link :to="project.path">{{ project.title }}</nuxt-link>
      </h3>
      <p>{{ project.summary }}</p>
      <a :href="project.path" class="read-more"
        >Project Details
        <ArrowRightIcon aria-label="Arrow icon"></ArrowRightIcon
      ></a>
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
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>
