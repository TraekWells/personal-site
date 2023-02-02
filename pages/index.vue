<template>
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
            I'm a freelance web designer and developer, focusing on helping
            small businesses build an online presence, while putting the
            <strong>user first</strong>.
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
          <figure class="home-header__image">
            <img
              src="/img/about-me-hero-image.jpg"
              class="home-header__image"
              alt="An image of Traek Wells"
            />
            <figcaption class="text-small text-center mt-15">
              No one told me that my tie clip was crooked.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </header>
  <main id="main">
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <h2>
          The goal isn’t just to build a website. The goal is to craft an
          experience that your users will love.
        </h2>
        <div class="d-grid-two-columns">
          <div class="d-grid__column">
            <img
              class="service-image"
              src="/img/homepage-featured-image.jpg"
              alt="Picture of mobile wireframes"
            />
          </div>
          <div class="d-grid__column">
            <p>
              It's far too easy to fall into the trap of designing a digital
              product that meet the needs of the designer. Ultimately though,
              the goal should be to design and build something that cater to
              your users.
            </p>
            <p><strong>That's where I come in.</strong></p>
            <p>I pride myself in creating websites that:</p>
            <ul>
              <li>Optimize digial usability</li>
              <li>Give the users what their looking for</li>
            </ul>
            <p>All while putting the <strong>user first</strong></p>
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
          <CalloutBox
            icon="design"
            title="UI Design"
            body="Meticulously designing good looking websites for an existing brand, or a brand new one."
          />
          <CalloutBox
            icon="development"
            title="Web Development"
            body="Taking an existing design or one I've created and building that into to an interactive, usable website."
          />
          <CalloutBox
            icon="user"
            title="User Experience"
            body="Making the digital product as usable and enjoyable as possible for the user. This is very important."
          />
        </div>
        <NuxtLink to="/services" class="read-more"
          >Learn more about my services <Icon type="arrowRight"
        /></NuxtLink>
      </div>
    </section>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <FancyHeader title="Projects I've built" />
        <p class="lead">
          I've had the great pleasure of working on some amazing projects.
        </p>
        <div class="projects">
          <ProjectCard
            v-for="project in projects"
            :key="project.path"
            :project="project"
          />
        </div>
      </div>
    </section>
    <section class="section section--secondary">
      <div class="wave-purple"></div>
      <div class="container container--narrow">
        <FancyHeader title="Beliefs" />
        <p class="lead mb-4">
          Over the years, I've gathered a few things that I've come to
          prioritize in the work I do. I approach every project with these in
          mind.
        </p>
        <div class="callout-blocks">
          <CalloutBox
            icon="user"
            title="Users come first"
            body="Optimizing websites for the user is absolutely critical in earning their trust and building credibility."
          />
          <CalloutBox
            icon="communication"
            title="Focused attention"
            body="I only work with one or two clients at a time which allows me to give clients the attention they need."
          />
          <CalloutBox
            icon="fun"
            title="Honesty"
            body="I'm transparent about what I can and can't do. You can trust me to give you an honest quote for your project."
          />
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
            body="Traek created a website for me where I can share my artwork, blogs, and accomplishments with the world. He really pulled off a design that fits my personality and passion, so if anyone is looking for a website designer. He’s the perfect person to work with."
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
      "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
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
