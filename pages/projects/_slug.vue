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
      <nuxt-picture
        v-if="project.featuredImage"
        class="featured-image"
        :src="project.featuredImage"
        :alt="project.title"
      />
      <div class="container container--narrow">
        <div class="content">
          <div class="content__image">
            <nuxt-picture
              v-if="!project.featuredImage"
              :src="project.previewImage"
              :alt="project.title"
            />
          </div>
          <div class="content__text">
            <nuxt-content :document="project"></nuxt-content>
          </div>
          <div class="content__sidebar">
            <h4>Technology Used</h4>
            <ul class="technology">
              <li
                v-for="tech in technology"
                :key="tech"
                class="technology__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="technology__icon-wrapper"
                  fill="currentColor"
                  stroke="none"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0Z"></path>
                    <g
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linejoin="round"
                    >
                      <path d="M4.48 11.98h14.99"></path>
                      <path d="M13.483 5.988L19.513 12l-6.04 6.01"></path>
                    </g>
                  </g>
                </svg>
                <span>{{ tech }}</span>
              </li>
            </ul>
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
    <article class="section">
      <div class="container container--narrow">
        <h2>More Projects</h2>
        <div class="projects">
          <ProjectCard
            v-for="project in moreProjects"
            :key="project.path"
            :project="project"
          />
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content, params }) {
    const project = await $content(`projects/${params.slug}`).fetch()
    const moreProjects = await $content(`projects`)
      .where({ draft: false })
      .where({ title: { $ne: project.title } })
      .limit(2)
      .fetch()

    return { project, moreProjects }
  },
  data() {
    return {
      headers: [],
      technology: [],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://traek.dev/projects/${this.$route.params.slug}`,
        title: this.project.title,
        description: this.project.summary,
        image: this.project.previewImage,
      }

      return getMetaData(metaData)
    },
  },
  mounted() {
    this.getHeaders()
    this.getTechnology()
  },
  methods: {
    getHeaders() {
      const headers = Array.from(document.querySelectorAll('.content h2'))

      headers.forEach((header) => {
        const headerObj = {}
        headerObj.text = header.textContent
        headerObj.link = header.id
        this.headers.push(headerObj)
      })
    },
    getTechnology() {
      const technology = this.project.technology
        .split(',')
        .map((item) => item.trim())
      this.technology = [...technology]
    },
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.project.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.project.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Traek Wells' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traekwells.com/projects/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>
