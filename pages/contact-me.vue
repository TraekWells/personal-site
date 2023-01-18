<template>
  <PageHeader eyebrow="Contact me" title="Get in touch" />
  <section>
    <div class="wave-white"></div>
    <div class="container container--narrow">
      <h3>Let's work together</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odit
        amet voluptates sunt voluptate qui.
      </p>
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
