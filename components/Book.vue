<template>
  <div class="book">
    <img class="book__image" :src="book.image" :alt="book.title" />
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
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: { ArrowRightIcon },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.book {
  display: flex;
  width: 45%;
  margin-bottom: 5rem;

  &__image {
    border-radius: 0;
    flex: 0 0 15rem;
    margin-right: 2rem;
    align-self: flex-start;

    @include respond-to(phone) {
      margin-bottom: 2rem;
    }
  }

  &__title {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  &__author {
    margin: 0 0 0.75rem;
  }

  &__thoughts {
    font-size: 1.6rem;
    margin-top: 0;
  }

  @include respond-to(tab-land) {
    width: 75%;
  }

  @include respond-to(phone) {
    flex-direction: column;
  }
}
</style>
