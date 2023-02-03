<template>
  <PageHeader eyebrow="Work" title="What I've worked on recently">
    <p class="lead">
      Here are some of my favorite projects that I've worked on.
    </p>
  </PageHeader>
  <main id="main">
    <section class="section pb-7">
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
    <section class="section">
      <div class="container container--narrow">
        <CallToAction />
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
      "Here are some projects that I've worked on that I had a blast doing. I've had the pleasure of working with some great people.",
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
