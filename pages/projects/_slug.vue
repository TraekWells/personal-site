<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <h1>{{ project.title }}</h1>
        <p class="lead">
          {{ project.summary }}
        </p>
      </div>
    </header>
    <article class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="content">
          <div class="content__image">
            <img :src="project.previewImage" :alt="project.title" />
          </div>
          <div class="content__text">
            <nuxt-content :document="project"></nuxt-content>
          </div>
          <div class="content__sidebar">
            <h4>Technology Used</h4>
            <p>{{ project.technology }}</p>
            <h4>Project Links</h4>
            <ul>
              <li>
                <a
                  :href="project.linkToProject"
                  target="_blank"
                  rel="noreferrer noopener"
                  >View Live Project</a
                >
              </li>
              <li v-if="project.linkToCode">
                <a
                  :href="project.linkToCode"
                  target="_blank"
                  rel="noreferrer noopener"
                  >View Code</a
                >
              </li>
            </ul>
            <h4>Table of Contents</h4>
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
export default {
  async asyncData({ $content, params }) {
    const project = await $content(`projects/${params.slug}`).fetch()

    return { project }
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

<style lang="scss" scoped></style>
