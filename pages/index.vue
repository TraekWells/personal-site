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
              Front-end Developer. UI Designer.
              <span class="text-highlight">Good Person</span>.
            </h1>
            <p>
              What’s up? I’m Traek. Welcome to my partition of the internet when
              I share what I'm learning and show what I've built.
            </p>
            <nuxt-link to="/projects" class="button button--primary"
              >See My Work
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <div class="section">
      <div class="container container--narrow">
        <h2 class="text-center">Stuff I've Built</h2>
        <p class="lead">
          Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari leia
          dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
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
      <div class="container container--narrow">
        <h2 class="text-center">Stuff I've Written</h2>
        <p class="lead mb-4">
          Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari leia
          dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
        </p>
        <div class="blogs">
          <BlogCard v-for="blog in blogs" :key="blog.path" :blog="blog" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'

export default {
  components: {
    ProjectCard,
    BlogCard,
  },
  async asyncData({ $content }) {
    const projects = await $content('projects').limit(2).fetch()
    const blogs = await $content('blog').fetch()
    return { projects, blogs }
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

    @include respond-to(tab-port) {
      flex-basis: 70%;
    }
  }
}

.blogs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
}
</style>
