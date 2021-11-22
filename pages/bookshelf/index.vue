<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Bookshelf</h1>
          <p class="lead mb-4">
            Here's a collection of the books I've either read or listened to and
            my thoughts about them.
          </p>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container">
        <div class="books">
          <Book v-for="book in books" :key="book.path" :book="book" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content }) {
    const books = await $content('bookshelf').fetch()
    return { books }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traek.dev/bookshelf`,
        title: 'Bookshelf',
        description:
          'Something about the books I’ve read and my thoughts on about them.',
      }

      return getMetaData(metaData)
    },
  },
  head() {
    return {
      title: 'Bookshelf',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traek.dev/bookshelf`,
        },
      ],
    }
  },
}
</script>
