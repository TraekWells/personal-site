<template>
  <div>
    <header class="header">
      <div class="container container--narrow">
        <h1>Projects</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          rerum.
        </p>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <article v-for="project in projects" :key="project.path">
          <p>{{ project.title }}</p>
          <nuxt-link :to="project.path">Go to Project</nuxt-link>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()

    return { projects }
  },
}
</script>

<style></style>
