<template>
  <main>
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
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()

    return { projects }
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
