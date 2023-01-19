<template>
  <main>
    <header class="header header--home">
      <div class="container container--narrow">
        <div class="home-header">
          <div class="home-header__content">
            <p class="eyebrow">Howdy. I'm Traek.</p>
            <h1>Web Developer <span class="amp">&amp;</span> UI Designer.</h1>
            <p class="lead">
              Howdy, I'm Traek and welcome to my digital garden where you'll see
              what I've built and written over the years.
            </p>
            <div class="d-inline">
              <NuxtLink to="/projects" class="button button--primary mr-2"
                >See My Work
              </NuxtLink>
              <NuxtLink to="/contact-me" class="button button--ghost"
                >Contact Me
              </NuxtLink>
            </div>
          </div>
          <div class="home-header__image">
            <!-- <img src="/img/about-me-image.jpg" alt="An image of Traek Wells" /> -->
          </div>
        </div>
      </div>
    </header>
    <div class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2>Stuff I've Built</h2>
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
      <div class="wave-purple"></div>
      <div class="container container--narrow">
        <h2>What I'm Good At</h2>
        <hr />
        <div class="skills">
          <div class="skill">
            <div class="skill__icon">
              <Icon name="uil:illustration" height="26" width="26" />
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
              <Icon name="uil:code-branch" height="26" width="26" />
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
        <h2>Stuff I've Written</h2>
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

<script setup>
import getMetaData from "@/config/getMetaData";

const { data: projects } = await useAsyncData("projects", () => {
  return queryContent("/projects").where({ featured: true }).find();
});
const { data: blogs } = await useAsyncData("blogs", () => {
  return queryContent("/blog").where({ draft: false }).find();
});

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/`,
    title: "Traek Wells",
    description:
      "Traek is a front-end web developer skilled in HTML, CSS, JavaScript and user interface design.",
  };
  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/`,
    },
  ],
});
</script>
