<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>About Me</h1>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <p class="text-center">
          TODO: Tell the world a little bit about yourself.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traek.dev/projects`,
        title: 'About',
        description:
          'A little bit about Traek Wells and how he got interested in being a Front-End Developer',
      }

      return getMetaData(metaData)
    },
  },
  head() {
    return {
      title: 'About',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traek.dev/about-me`,
        },
      ],
    }
  },
}
</script>

<style></style>
