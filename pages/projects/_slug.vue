<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ project.title }}</h1>
        <p class="lead">
          {{ project.summary }}
        </p>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <div class="post">
          <div class="post__content">
            <nuxt-content :document="project"></nuxt-content>
          </div>
          <div class="post__sidebar">
            <h4>Technology Used</h4>
            <p>{{ project.technology }}</p>
            <h4>Project Links</h4>
            <ul>
              <li>
                <a :href="project.linkToProject" target="_blank"
                  >View Live Project</a
                >
              </li>
              <li>
                <a :href="project.linkToCode" target="_blank">View Code</a>
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
    const project = await $content(`projects/${params.slug}`).fetch()

    return { project }
  },
}
</script>

<style lang="scss" scoped></style>
