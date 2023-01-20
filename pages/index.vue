<template>
  <main>
    <header class="header header--home">
      <div class="container container--narrow">
        <div class="home-header">
          <div class="home-header__content">
            <p class="eyebrow">Howdy. I'm Traek.</p>
            <h1>Web Developer <span class="amp">&amp;</span> UI Designer.</h1>
            <p class="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              impedit iure ea aut culpa consectetur.
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
          <div class="home-header__image-container fancy-image">
            <img
              src="/img/about-me-image.jpg"
              class="home-header__image"
              alt="An image of Traek Wells"
            />
          </div>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2>
          The goal isn’t to just build a website. The goal is to craft an
          experience that your users will love.
        </h2>
        <div class="d-grid-two-columns">
          <div class="d-grid__half">
            <img src="https://via.placeholder.com/450" alt="" />
          </div>
          <div class="d-grid__half">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <NuxtLink to="/process">Learn more about the process</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--secondary">
      <div class="wave-purple"></div>
      <div class="container container--narrow">
        <div class="d-grid-two-columns">
          <div class="d-grid__half">
            <div class="fancy-header">
              <HeadingDots />
              <h2>Skills I have</h2>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              sint facere itaque reiciendis ut aperiam.
            </p>
            <NuxtLink to="/services">Learn more</NuxtLink>
          </div>
          <div class="d-grid__half">
            <div class="callout-blocks">
              <div class="callout-block">
                <div class="callout-block__icon">
                  <Icon name="uil:illustration" height="26" width="26" />
                </div>
                <div class="callout-block__details">
                  <p class="callout-block__title">UI Design</p>
                  <p>
                    User Experience was my first love and I take pride in
                    designing beautiful, fast, and accessible websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

    <div class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2>Stuff I've Written</h2>
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
