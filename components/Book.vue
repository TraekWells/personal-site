<template>
  <div class="book">
    <div class="book__art">
      <nuxt-picture
        :src="book.image"
        :alt="book.title"
        loading="lazy"
        class="book__image"
      />
      <div class="book__rating">
        <Icon
          v-for="star in book.rating"
          :key="book.title"
          class="feather-star"
          aria-label="Star icon"
          name="fe:star"
        />
      </div>
    </div>
    <div class="book__details">
      <h3 class="book__title">
        <NuxtLink :to="book._path">{{ book.title }}</NuxtLink>
      </h3>
      <p class="book__author">{{ book.author }}</p>
      <p class="book__thoughts">{{ book.thoughts }}</p>
      <NuxtLink :to="book._path" class="read-more"
        >Book Notes <Icon name="uil:arrow-right" height="26" width="26"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>
