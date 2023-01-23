<template>
  <PageHeader eyebrow="Services" title="Here's how I can help" />
  <main>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <article class="mb-10">
          <FancyHeader title="User Interface Design" />
          <p class="lead">
            Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari
            leia dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
          </p>
          <div class="d-grid-two-columns">
            <div class="d-grid__column">
              <img src="https://via.placeholder.com/450" alt="" />
            </div>
            <div class="d-grid__column">
              <Icon type="arrowRight" />
              <h4>Responsive design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda?
              </p>
              <Icon type="arrowRight" />
              <h4>Accessible for all</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda?
              </p>
              <Icon type="arrowRight" />
              <h4>Users first</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda?
              </p>
            </div>
          </div>
        </article>
        <article class="mb-10">
          <FancyHeader title="Web Development" />
          <p class="lead">
            Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari
            leia dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
          </p>
          <div class="d-grid-two-columns">
            <div class="d-grid__column">
              <img src="https://via.placeholder.com/450" alt="" />
            </div>
            <div class="d-grid__column">
              <Icon type="arrowRight" />
              <h4>Performant</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda?
              </p>
              <Icon type="arrowRight" />
              <h4>Accessible for all</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda?
              </p>
              <Icon type="arrowRight" />
              <h4>Hosting and domain</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, assumenda?
              </p>
            </div>
          </div>
        </article>
        <article class="mb-10">
          <FancyHeader title="Tools that I use" />
          <p class="lead">
            Lucas ipsum dolor sit amet leia chewbacca hutt hutt boba calamari
            leia dagobah ahsoka antilles. Ben obi-wan kamino solo kessel.
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
