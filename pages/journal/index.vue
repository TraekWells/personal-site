<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Journal</h1>
          <p class="lead mb-4">
            Sharing what I've learned in the hopes of solidifying the knowledge
            and helping others however I can.
          </p>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="blogs">
          <BlogCard v-for="blog in blogs" :key="blog.path" :blog="blog" />
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
      .sortBy('direction', 'desc')
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
          "Sharing what I've learned in the hopes solidify the knowledge and helping others however I can.",
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

<style lang="scss">
.blogs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
}
</style>
