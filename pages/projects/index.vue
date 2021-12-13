<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Projects</h1>
          <p class="lead">
            Stuff I've built through trial and error, a lot of breaks and just
            hoping that everything worked. Check out some of my smaller stuff
            here
            <a href="https://codepen.io/traekwells" target="_blank"
              >on CodePen</a
            >.
          </p>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="projects">
          <ProjectCard
            v-for="project in projects"
            :key="project.path"
            :project="project"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData.js'

export default {
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()

    return { projects }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traekwells.com/projects`,
        title: 'Projects',
        description:
          "Stuff I've built through trial and error, a lot of breaks and just hoping that everything worked.",
      }

      return getMetaData(metaData)
    },
  },
  head() {
    return {
      title: 'Projects',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traekwells.com/projects`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  @include respond-to(tab-port) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.project {
  &__image {
    border-radius: 1rem;
    overflow: hidden;
  }

  &__content {
    padding: 2rem;
  }
}
</style>
