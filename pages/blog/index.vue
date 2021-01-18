<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>Blog</h1>
        <p class="lead mb-4">
          Sharing what I've learned in the hopes of solidify the knowledge and
          helping others however I can.
        </p>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <div class="blogs">
          <BlogCard v-for="blog in blogs" :key="blog.path" :blog="blog" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blog').fetch()

    return { blogs }
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
