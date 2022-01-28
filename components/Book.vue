<template>
  <div class="book">
    <div class="book__art">
      <nuxt-picture
        class="book__image"
        :src="book.image"
        :alt="book.title"
        loading="lazy"
      />
      <div class="book__rating">
        <StarIcon
          v-for="(star, index) in book.rating"
          :key="index"
          aria-label="Star icon"
        />
      </div>
    </div>
    <div class="book__details">
      <h3 class="book__title">
        <nuxt-link :to="book.path">{{ book.title }}</nuxt-link>
      </h3>
      <p class="book__author">{{ book.author }}</p>
      <p class="book__thoughts">{{ book.thoughts }}</p>
      <nuxt-link :to="book.path" class="read-more"
        >Book Notes <ArrowRightIcon aria-label="Arrow icon"></ArrowRightIcon
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon, StarIcon } from 'vue-feather-icons'
export default {
  components: { ArrowRightIcon, StarIcon },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
}
</script>
