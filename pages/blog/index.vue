<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>Blog</h1>
        <p class="lead mb-4">
          Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari leia
          dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
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
