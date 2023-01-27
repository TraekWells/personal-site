<template>
  <main id="main">
    <header class="header header--home">
      <div class="container container--narrow">
        <div class="home-header">
          <div class="home-header__content">
            <p class="eyebrow">Howdy, I'm Traek. 🐜</p>
            <h1>
              <span class="home-header__highlight"
                >I build beautiful websites that work.</span
              >
            </h1>
            <p class="lead">
              As a <span class="underline">user-focused</span> designer and
              developer, I help people by building platforms that look good,
              perform great and exceeds user needs.
            </p>
            <div class="d-inline">
              <NuxtLink to="/projects" class="button button--primary mr-2"
                >See My Work <Icon type="arrowRight" />
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
          The goal isn’t just to build a website. The goal is to craft an
          experience that your users will love.
        </h2>
        <div class="d-grid-two-columns">
          <div class="d-grid__column">
            <img src="https://via.placeholder.com/450" alt="" />
          </div>
          <div class="d-grid__column">
            <p>
              When someone visits your website, it's in everyone's best interest
              that they find the answers their looking for.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <NuxtLink to="/process" class="read-more"
              >Learn more about the process <Icon type="arrowRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--secondary">
      <div class="wave-purple"></div>
      <div class="container container--narrow">
        <FancyHeader title="Skills I have" />
        <p class="lead">
          I've spent a lot of time over the years trying to get better at both
          design and development, in order to deliver the best possible product.
        </p>
        <div class="callout-blocks">
          <div class="callout-block">
            <div class="callout-block__icon">
              <Icon type="design" />
            </div>
            <div class="callout-block__details">
              <p class="callout-block__title">UI Design</p>
              <p>User Experience was my first love.</p>
            </div>
          </div>
          <div class="callout-block">
            <div class="callout-block__icon">
              <Icon type="development" />
            </div>
            <div class="callout-block__details">
              <p class="callout-block__title">Web Development</p>
              <p>User Experience was my first love.</p>
            </div>
          </div>
          <div class="callout-block">
            <div class="callout-block__icon">
              <Icon type="wordpress" />
            </div>
            <div class="callout-block__details">
              <p class="callout-block__title">Wordpress</p>
              <p>User Experience was my first love.</p>
            </div>
          </div>
          <div class="callout-block">
            <div class="callout-block__icon">
              <Icon type="design" />
            </div>
            <div class="callout-block__details">
              <p class="callout-block__title">Convinced?</p>
              <p>User Experience was my first love.</p>
            </div>
          </div>
        </div>
        <NuxtLink to="/services" class="read-more"
          >Learn more about my services <Icon type="arrowRight"
        /></NuxtLink>
      </div>
    </section>
    <div class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <FancyHeader title="Projects I've built" />
        <p class="lead">
          I've had the great pleasure of working on some great projects.
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

    <section class="section section--secondary">
      <div class="wave-purple"></div>
      <div class="container container--narrow">
        <FancyHeader title="Beliefs" />
        <p class="lead mb-4">
          Over the years, I've gathered a few things that I've come to
          prioritize in the work I do. I approach every project with these in
          mind.
        </p>
        <div class="d-grid-three-columns">
          <div class="d-grid__column">
            <Icon type="user" />
            <h3>Users come first</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              assumenda?
            </p>
          </div>
          <div class="d-grid__column">
            <Icon type="communication" />
            <h3>Communication is key</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              assumenda?
            </p>
          </div>
          <div class="d-grid__column">
            <Icon type="fun" />
            <h3>Enjoy the process</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              assumenda?
            </p>
          </div>
        </div>
        <NuxtLink to="/about-me" class="read-more"
          >Learn more about me <Icon type="arrowRight"
        /></NuxtLink>
      </div>
    </section>

    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2 class="text-center">Don't take my word for it</h2>
        <p class="lead text-center centered-block">
          Here are some kind words from people I've worked with in the past.
        </p>
        <div class="testimonials">
          <Testimonial
            body="Lucas ipsum dolor sit amet leia chewbacca hutt hutt
        boba calamari leia dagobah ahsoka antilles. Ben obi-wan kamino solo
        kessel."
            authorName="Emeche Wells"
            authorImage="https://i.pravatar.cc/300"
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
  return queryContent("/projects").where({ featured: true }).find();
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
