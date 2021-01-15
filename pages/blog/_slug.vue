<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ blog.title }}</h1>
        <p class="lead">{{ blog.summary }}</p>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <div class="post">
          <div class="post__content">
            <nuxt-content :document="blog"></nuxt-content>
          </div>
          <div class="post__sidebar">
            <p>Table of Contents</p>
            <ul>
              <li v-for="header in headers" :key="header.id">
                <a :href="`#${header.link}`">{{ header.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blog/${params.slug}`).fetch()

    return { blog }
  },
  data() {
    return {
      headers: [],
    }
  },

  mounted() {
    const headers = Array.from(document.querySelectorAll('h2'))
    headers.forEach((header) => {
      const headerObj = {}
      headerObj.text = header.textContent
      headerObj.link = header.id
      this.headers.push(headerObj)
    })
  },
}
</script>

<style lang="scss">
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
