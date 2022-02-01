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
      <div class="container container--narrow">
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
    const books = await $content('bookshelf')
      .where({ draft: false })
      .sortBy('createdAt', 'desc')
      .fetch()
    return { books }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traekwells.com/bookshelf`,
        title: 'Bookshelf',
        description:
          'Heres a collection of the books Ive either read or listened to and my thoughts about them.',
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
          href: `https://traekwells.com/bookshelf`,
        },
      ],
    }
  },
}
</script>
