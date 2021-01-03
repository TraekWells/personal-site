<template>
  <div>
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ blog.title }}</h1>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <nuxt-content :document="blog"></nuxt-content>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blog/${params.slug}`).fetch()

    return { blog }
  },
}
</script>

<style></style>
