<template>
  <PageHeader eyebrow="About me" title="My story">
    <p class="lead">
      From goals of being a concept artist to a zoologist, life led me to my
      true passion of being a User Interface designer and developer.
    </p>
  </PageHeader>
  <main id="main">
    <article class="section pt-0 pb-7">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="content">
          <div class="content__text">
            <ContentDoc />
          </div>
          <div class="content__sidebar">
            <TableOfContents :headers="tableOfContents" />
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import getMetaData from "@/config/getMetaData";
const tableOfContents = ref([]);

onMounted(() => {
  const headers = Array.from(document.querySelectorAll(".content h2"));
  headers.forEach((header) => {
    const headerObj = {};
    headerObj.text = header.textContent;
    headerObj.link = header.id;
    tableOfContents.value.push(headerObj);
  });
});

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/about-me`,
    title: "Traek Wells",
    description:
      "I'm a freelance User Interface designer and web developer who takes pride in putting the user first in every step of the design process. Let's work together and build your online presence today.",
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
