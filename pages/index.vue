<template>
  <main>
    <header class="header header--home">
      <div class="container container--narrow">
        <div class="home-header">
          <div class="home-header__image">
            <img src="/img/about-me-image.jpg" alt="An image of Traek Wells" />
          </div>
          <div class="home-header__content">
            <h1>
              Web Developer. UI Designer.
              <span class="underline">Good Person</span>.
            </h1>
            <p>
              Howdy, I'm Traek and welcome to my digital garden where you'll see
              what I've built and written over the years.
            </p>
            <nuxt-link to="/projects" class="button button--primary"
              >See My Work
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <div class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2 class="text-center">Stuff I've Built</h2>
        <hr />
        <p class="lead">
          Here are some of the bigger projects that I've built that I'm proud
          of. Check out some of my smaller stuff here
          <a
            href="https://codepen.io/traekwells"
            target="_blank"
            rel="noreferrer noopener"
            >on CodePen</a
          >.
        </p>
        <div class="projects">
          <ProjectCard
            v-for="project in projects"
            :key="project.path"
            :project="project"
          />
        </div>
      </div>
    </div>

    <div class="section section--secondary">
      <div class="wave-yellow"></div>
      <div class="container container--narrow">
        <h2 class="text-center">What I'm Good At</h2>
        <hr />
        <div class="skills">
          <div class="skill">
            <div class="skill__icon">
              <PenToolIcon />
            </div>
            <div class="skill__details">
              <h3>User Experience</h3>
              <p>
                User Experience was my first love and I take pride in designing
                beautiful, fast, and accessible websites.
              </p>
            </div>
          </div>
          <div class="skill">
            <div class="skill__icon">
              <CodeIcon />
            </div>
            <div class="skill__details">
              <h3>Front End Development</h3>
              <p>
                Coding was my second love and it's what gets me excited. React,
                Vue, and WordPress are the tools I like to use most.
              </p>
            </div>
          </div>
        </div>
        <p class="text-center mt-4 mb-5">
          Also, I have experience with a handful of other front-end languages
          and design tools.
        </p>
      </div>
    </div>

    <div class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2 class="text-center">Stuff I've Written</h2>
        <hr />
        <p class="lead mb-4">
          Sharing what I've learned in the hopes of solidify the knowledge and
          helping others however I can.
        </p>
        <div class="blogs">
          <BlogCard v-for="blog in blogs" :key="blog.path" :post="blog" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import getMetaData from '@/config/getMetaData.js'
import { PenToolIcon, CodeIcon } from 'vue-feather-icons'

export default {
  components: {
    ProjectCard,
    BlogCard,
    PenToolIcon,
    CodeIcon,
  },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .where({ featured: true })
      .fetch()
    const blogs = await $content('blog')
      .sortBy('direction', 'desc')
      .where({ draft: false })
      .fetch()
    return { projects, blogs }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://traekwells.com/`,
        title: 'Traek Wells',
        description:
          'Traek is a front-end web developer skilled in HTML, CSS, JavaScript and user interface design. More importantly, he is a good person.',
      }

      return getMetaData(metaData)
    },
  },
  head() {
    return {
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://traekwells.com/`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.home-header {
  display: flex;
  justify-content: center;

  @include respond-to(phone) {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-weight: normal;
  }

  &__image {
    flex-basis: 35%;
    margin-right: 6rem;
    position: relative;
    z-index: 10;
    overflow: hidden;
    border-radius: 1rem;
    height: 40rem;
    margin-bottom: -7rem;

    @include respond-to(phone) {
      display: none;
    }

    @include respond-to(tab-port) {
      height: 35rem;
      margin-right: 5rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(#561c6d, 0.55);
    }

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  &__content {
    flex-basis: 50%;
    z-index: 10;

    p {
      font-size: 2rem;
    }

    @include respond-to(tab-port) {
      flex-basis: 70%;
    }
  }
}

.blogs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  justify-content: center;

  @include respond-to(tab-port) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
}
.skill {
  display: flex;

  p {
    margin-bottom: 0;
  }
}

.skill {
  &__icon {
    background-color: var(--color-white);
    align-self: flex-start;
    border-radius: var(--border-radius-xsm);
    flex-shrink: 0;
    padding: 1rem;
    height: 4.5rem;
    width: 4.5rem;
    display: grid;
    place-content: center;
    margin-right: 2rem;
    color: var(--color-primary-700);
  }

  &__details {
  }
}
</style>
