<template>
  <div>
    <header class="header">
      <div class="container container--narrow">
        <h1>Blog</h1>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <article v-for="blog in blogs" :key="blog.path">
          <p>{{ blog.title }}</p>
          <nuxt-link :to="blog.path">Read blog</nuxt-link>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blog').fetch()

    return { blogs }
  },
}
</script>

<style></style>
