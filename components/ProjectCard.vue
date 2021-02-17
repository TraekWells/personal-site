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
      <a :href="project.path" class="read-more"
        >Project Details <ArrowRightIcon></ArrowRightIcon
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

<style lang="scss">
.project {
  &__image {
    border-radius: 1rem;
    overflow: hidden;
  }

  &__content {
    padding: 2rem;
  }

  .read-more {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    border-bottom: none;

    svg {
      transition: 0.2s ease transform;
      margin-left: 1rem;
    }

    &:hover {
      border-bottom: none;

      svg {
        transform: translateX(1rem);
      }
    }
  }
}
</style>
