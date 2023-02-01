<template>
  <PageHeader eyebrow="Contact me" title="Get in touch" />
  <section class="section pb-7">
    <div class="wave-white"></div>
    <div class="container container--narrow">
      <div class="d-grid-two-columns half">
        <div class="d-grid__half">
          <h3>Let's work together</h3>
          <p>
            Shoot me a message and let's get started on turning your project
            into a reality.
          </p>
          <a class="big-link" href="mailto:howdy@traekwells.com"
            >howdy@traekwells.com</a
          >
        </div>
        <div class="d-grid__half">
          <h3>Connect with me</h3>
          <p>
            I'm not super active on social media but give me a follow to see
            what I'm working on.
          </p>
          <a
            class="big-link mr-2"
            href="https://www.linkedin.com/in/traekwells/"
            target="_blank"
            >LinkedIn</a
          >
          <a
            class="big-link"
            href="https://twitter.com/TraekWells"
            target="_blank"
            >Twitter</a
          >
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container container--narrow">
      <h3>Around the area?</h3>
      <p>I’d love to connect in person over a coffee or tea.</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26809.57649531089!2d-93.15367952228985!3d44.982648590140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1674156973178!5m2!1sen!2sus"
        width="100%"
        height="500"
        class="mb-5"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import getMetaData from "@/config/getMetaData";

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/about-me`,
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
      href: `https://traekwells.com/about-me`,
    },
  ],
});
</script>
