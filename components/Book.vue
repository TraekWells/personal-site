<template>
  <div class="book">
    <h3>
      <nuxt-link :to="book.path">{{ book.title }}</nuxt-link>
    </h3>
    <p>{{ book.author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
