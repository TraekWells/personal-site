<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ blog.title }}</h1>
        <p class="lead">{{ blog.summary }}</p>
      </div>
    </header>
    <article class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="content">
          <div class="content__text">
            <div class="content__info">
              <p>
                Written on {{ $formatDate(blog.createdAt) }} and takes about
                {{ wordCount }} minutes to read.
              </p>
            </div>
            <nuxt-content :document="blog"></nuxt-content>
          </div>
          <div class="content__sidebar">
            <p>Table of Contents</p>
            <ul>
              <li v-for="header in headers" :key="header.id">
                <a :href="`#${header.link}`">{{ header.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blog/${params.slug}`).fetch()
    return { blog }
  },
  data() {
    return {
      headers: [],
      wordCount: null,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://traek.dev/blog/${this.$route.params.slug}`,
        title: this.blog.title,
        description: this.blog.summary,
        image: this.blog.previewImage,
      }

      return getMetaData(metaData)
    },
  },
  mounted() {
    const headers = Array.from(document.querySelectorAll('h2'))
    headers.forEach((header) => {
      const headerObj = {}
      headerObj.text = header.textContent
      headerObj.link = header.id
      this.headers.push(headerObj)
    })
    this.getWordCount()
  },
  methods: {
    getWordCount() {
      const wpm = 250
      const body = document.querySelector('.nuxt-content')
      const words = body.textContent.trim().split(/\s+/).length

      this.wordCount = Math.ceil(words / wpm)
    },
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.blog.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.blog.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Traek Wells' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traek.dev/blog/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
/* This is to create some space above the header after a use clicks on an anchor link */
h2 {
  &::before {
    display: block;
    content: '';
    margin-top: -10rem;
    height: 10rem;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
