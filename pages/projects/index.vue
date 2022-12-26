<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Projects</h1>
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
        </div>
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

<script setup>
import getMetaData from "@/config/getMetaData";
const { data: projects } = await useAsyncData("projects", () => {
  return queryContent("/projects").find();
});
const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/projects`,
    title: "Projects",
    description:
      "Stuff I've built through trial and error, a lot of breaks and just hoping that everything worked.",
  };
  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  title: "Projects",
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/projects`,
    },
  ],
});
</script>
