<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ book.title }}</h1>
        <p class="lead">{{ book.thoughts }}</p>
      </div>
    </header>
    <article class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="content">
          <div class="content__text">
            <nuxt-content :document="book"></nuxt-content>
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
    <article class="section section--secondary">
      <div class="wave-purple"></div>
      <div class="container container--narrow">
        <h2>Notes from other books</h2>
        <div class="books">
          <Book v-for="book in moreBooks" :key="book.path" :book="book" />
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content, params }) {
    const book = await $content(`bookshelf/${params.slug}`).fetch()
    const moreBooks = await $content(`bookshelf`)
      .where({ draft: false })
      .where({ title: { $ne: book.title } })
      .limit(2)
      .fetch()
    return { book, moreBooks }
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
        url: `https://traekwells.com/bookshelf/${this.$route.params.slug}`,
        title: this.book.title,
        description: this.book.summary,
        image: this.book.previewImage,
      }

      return getMetaData(metaData)
    },
  },
  mounted() {
    const headers = Array.from(document.querySelectorAll('.content h2'))
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
      title: this.book.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.book.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.book.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Traek Wells' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traekwells.com/bookshelf/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>
