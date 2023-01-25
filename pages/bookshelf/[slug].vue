<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <h1>
          {{ book.title }}
          <span class="book__author">Written by {{ book.author }}</span>
        </h1>
        <p class="lead">{{ book.thoughts }}</p>
      </div>
    </header>
    <article class="section">
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
    <article class="section section--secondary">
      <div class="container container--narrow">
        <h2>Notes from other books</h2>
        <div class="books">
          <Book v-for="book in moreBooks" :key="book.path" :book="book" />
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData.js";
import { onMounted, ref } from "vue";
const { path } = useRoute();
const tableOfContents = ref([]);

let queryPath = path;
if (queryPath[queryPath.length - 1] === "/") {
  queryPath = queryPath.replace(/.$/, "");
}

const { data: book } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/bookshelf").where({ _path: queryPath }).findOne();
});

const { data: moreBooks } = await useAsyncData(`more-content-${path}`, () => {
  return queryContent("/bookshelf")
    .where({ _path: { $ne: path } })
    .limit(2)
    .find();
});

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
    type: "article",
    url: `https://traekwells.com${path}`,
    title: book.value.title,
    description: book.value.summary,
    image: book.value.previewImage,
  };
  return getMetaData(
    metaData,
    {
      property: "article:published_time",
      content: book.value.createdAt,
    },
    {
      property: "article:modified_time",
      content: book.value.updatedAt,
    },
    { name: "twitter:label1", content: "Written by" },
    { name: "twitter:data1", content: "Traek Wells" }
  );
};
useHead({
  meta: getMeta,
  title: book.value.title,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com${path}`,
    },
  ],
});
</script>
