<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <ul v-if="journal.tags" class="post__tags">
          <li v-for="tag in journal.tags" :key="tag" class="post__tag">
            {{ tag }}
          </li>
        </ul>
        <h1>{{ journal.title }}</h1>
        <p class="lead">{{ journal.summary }}</p>
      </div>
    </header>
    <article class="section">
      <div class="container container--narrow">
        <div class="content">
          <div class="content__text">
            <div class="content__info">
              <p>Written on {{ formatDate(journal.createdAt) }}.</p>
            </div>
            <ContentDoc />
          </div>
          <div class="content__sidebar">
            <p>Table of Contents</p>
            <ul v-if="tableOfContents">
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
import { ref, onMounted } from "vue";
import getMetaData from "@/config/getMetaData.js";
const { path } = useRoute();
const tableOfContents = ref([]);
const wordCount = ref(0);

const { data: journal } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/journal").where({ _path: path }).findOne();
});

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

// const getWordCount = () => {
//   const wpm = 250;
//   const body = document.querySelector(".content__text");
//   const words = body.textContent.trim().split(/\s+/).length;

//   wordCount.value = Math.ceil(words / wpm);
// };

const createTableOfContents = async () => {
  const headers = await Array.from(document.querySelectorAll(".content h2"));
  console.log(headers);
  headers.forEach((header) => {
    const headerObj = {};
    headerObj.text = header.textContent;
    headerObj.link = header.id;
    tableOfContents.value.push(headerObj);
  });
};

onMounted(() => {
  createTableOfContents();
  // getWordCount();
});

const getMeta = () => {
  const metaData = {
    type: "article",
    url: `https://traekwells.com${path}`,
    title: journal.value.title,
    description: journal.value.summary,
    image: journal.value.previewImage,
  };
  return getMetaData(
    metaData,
    {
      property: "article:published_time",
      content: journal.value.createdAt,
    },
    {
      property: "article:modified_time",
      content: journal.value.updatedAt,
    },
    { name: "twitter:label1", content: "Written by" },
    { name: "twitter:data1", content: "Traek Wells" }
  );
};
useHead({
  meta: getMeta,
  title: journal.value.title,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com${path}`,
    },
  ],
});
</script>
