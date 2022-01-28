<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Journal</h1>
          <p class="lead mb-4">
            This is a place for me to share anything that doesn't fit into my
            normal
            <nuxt-link to="/blog">blog</nuxt-link> topics. Most likely about
            life, being productive and ants.
          </p>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="blogs">
          <BlogCard
            v-for="journal in journals"
            :key="journal.path"
            :post="journal"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content }) {
    const journals = await $content('journal')
      .sortBy('direction', 'asc')
      .where({ draft: false })
      .fetch()
    return { journals }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traekwells.com/journal`,
        title: 'Journal',
        description:
          "This is a place for me to share anything that doesn't fit into my normal blog topics. Most likely about life, being productive and ants.",
      }

      return getMetaData(metaData)
    },
  },
  head() {
    return {
      title: 'Journal',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traekwells.com/journal`,
        },
      ],
    }
  },
}
</script>
