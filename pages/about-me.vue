<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>About Me</h1>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <div class="about-me">
          <div class="about-me__image">
            <img src="/img/me-after-a-run.jpg" alt="Me after a run" />
          </div>
          <div class="about-me__content">
            <ContentDoc />
          </div>
        </div>
      </div>
    </section>
  </main>
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
