<template>
  <PageHeader eyebrow="About me" title="My story" />
  <main id="main">
    <article class="section pb-7">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="content">
          <div class="content__text">
            <!-- <div class="content__info">
              <p>About a {{ wordCount }} minute read.</p>
            </div> -->
            <ContentDoc />
          </div>
          <div class="content__sidebar">
            <p class="eyebrow">Table of Contents</p>
            <ul>
              <li v-for="header in tableOfContents" :key="header.id">
                <a :href="`#${header.link}`">{{ header.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
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
