<template>
  <main>
    <header class="header wave-white">
      <div class="container container--narrow">
        <div class="header-home">
          <div class="header-home__image">
            <img
              src="~assets/img/about-me-image.jpg"
              alt="An image of Traek Wells"
            />
          </div>
          <div class="header-home__content">
            <h1>Front-end Developer. UI Designer. Good Person.</h1>
            <p>
              What’s up? I’m Traek. Lucas ipsum dolor sit amet salacious selkath
              bormea kenobi kathol amedda lowbacca gonk skakoan tib.
            </p>
            <nuxt-link to="/projects" class="button button--primary"
              >See My Work</nuxt-link
            >
          </div>
        </div>
      </div>
    </header>
    <div class="section">
      <div class="container container--narrow">
        <h2>Stuff I've Built</h2>
        <p class="lead">
          Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari leia
          dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
        </p>
        <nuxt-link to="/projects">See More Projects</nuxt-link>
      </div>
    </div>
    <div class="section section--secondary wave-yellow">
      <div class="container container--narrow">
        <h2>Stuff I've Written</h2>
        <p class="lead">
          Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari leia
          dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
        </p>
        <nuxt-link to="/projects">See All Articles</nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()

    return {
      projects,
    }
  },
}
</script>

<style lang="scss">
.header-home {
  display: flex;

  &__image {
    flex: 45%;
    margin-right: 7rem;
    height: 37rem;

    img {
      border-radius: 1rem;
      object-fit: cover;
      height: 115%;
      position: relative;

      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background-color: red;
        z-index: 10;
      }
    }
  }

  &__content {
    flex: 55%;
  }
}
</style>
