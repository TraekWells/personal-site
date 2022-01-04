<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ about.pageTitle }}</h1>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="about-me">
          <div class="about-me__image">
            <img src="/img/me-after-a-run.jpg" alt="Me after a run" />
          </div>
          <div class="about-me__content">
            <nuxt-content :document="about"></nuxt-content>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content }) {
    const about = await $content('about-me').fetch()
    return { about }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traekwells.com/about-me`,
        title: 'About',
        description: 'A little bit about Traek Wells',
      }

      return getMetaData(metaData)
    },
  },
  head() {
    return {
      title: 'About Traek Wells',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traekwells.com/about-me`,
        },
      ],
    }
  },
}
</script>
