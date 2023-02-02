<template>
  <PageHeader eyebrow="Services" title="Here's how I can help">
    <p class="lead">
      I have the skills to design and build you a beautiful website that works.
    </p>
  </PageHeader>
  <main id="main">
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <article class="mb-10">
          <FancyHeader title="User Interface Design" />
          <p class="lead">
            Designing a website is where I have the most fun in any given
            project. It's where a blend of business needs, user needs and
            creativity come together to form one, cohesive product that's
            mutually beneficial.
          </p>
          <div class="d-grid-two-columns">
            <div class="d-grid__column">
              <img src="https://via.placeholder.com/450" alt="" />
            </div>
            <div class="d-grid__column">
              <Icon type="responsive" />
              <h3>Responsive design</h3>
              <p>
                It's no secret that most internet traffic is from users on a
                mobile device. It's about 60%. That's why all of the websites
                that I design look great on all device sizes.
              </p>
              <Icon type="accessibility" />
              <h3>Accessible for all</h3>
              <p>
                Using the web is a fundamental <strong>right</strong> for all
                people today. In the design phase, I make sure that I'm building
                something that can be used by people of all capabilities.
              </p>
            </div>
          </div>
        </article>
        <article class="mb-10">
          <FancyHeader title="Web Development" />
          <p class="lead">
            As a web developer with over five years of experience, I know how to
            bridge the gap between great design and excellent functionality.
          </p>
          <div class="d-grid-two-columns">
            <div class="d-grid__column">
              <img src="https://via.placeholder.com/450" alt="" />
            </div>
            <div class="d-grid__column">
              <Icon type="performant" />
              <h3>Performance</h3>
              <p>
                No one likes a slow website. Not only that, the chances of
                someone coming back to a slow are <em>very</em> slim. That's why
                during development, I make it a point to optimize performance.
              </p>
              <Icon type="hosting" />
              <h3>Hosting and domain</h3>
              <p>
                Rest assured that after the development is finished, I'll help
                you get a domain if you don't already have one and assist in
                setting up web hosting so people can actually visit your new
                site!
              </p>
            </div>
          </div>
        </article>
        <article class="mb-10">
          <FancyHeader title="Tools that I use" />
          <p class="lead">
            I've used a handful of different tools over the years and they all
            help to accomplish the same goal. Here are some tools that I've come
            to love.
          </p>
          <div class="tools">
            <Tool>
              <img src="/img/react-logo.png" alt="React JS icon" />
            </Tool>
            <Tool>
              <img src="/img/vue-js-logo.png" alt="Vue JS icon" />
            </Tool>
            <Tool>
              <img src="/img/wordpress-logo.png" alt="WordPress icon" />
            </Tool>
            <Tool>
              <img src="/img/sass-logo.png" alt="SASS icon" />
            </Tool>
            <Tool>
              <img src="/img/sketch-logo.png" alt="Sketch icon" />
            </Tool>
          </div>
        </article>
        <section class="section">
          <div class="container container--narrow">
            <CallToAction />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData";

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/process`,
    title: "Traek Wells",
    description: "Process description",
  };
  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/process`,
    },
  ],
});
</script>
