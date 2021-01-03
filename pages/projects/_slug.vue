<template>
  <div>
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ project.title }}</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          rerum.
        </p>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <nuxt-content :document="project"></nuxt-content>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content(`projects/${params.slug}`).fetch()

    return { project }
  },
}
</script>

<style></style>
