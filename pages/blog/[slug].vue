<template>
  <main class="post">
    <header class="header">
      <div class="container container--narrow">
        <ul v-if="blog.tags" class="post__tags">
          <li v-for="tag in blog.tags" :key="tag" class="post__tag">
            {{ tag }}
          </li>
        </ul>
        <h1>{{ blog.title }}</h1>
        <p class="lead">{{ blog.summary }}</p>
      </div>
    </header>
    <article class="section">
      <div class="container container--narrow">
        <div class="content">
          <div class="content__text">
            <div class="content__info">
              <p>About a {{ wordCount }} minute read.</p>
            </div>
            <ContentDoc />
          </div>
          <div class="content__sidebar">
            <p>Table of Contents</p>
            <ul>
              <li v-for="header in tableOfContents" :key="header.id">
                <a :href="`#${header.link}`">{{ header.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <article class="section section--secondary">
      <div class="container container--narrow">
        <h2>More Stuff I've Written</h2>
        <div class="blogs">
          <BlogCard v-for="blog in moreBlogs" :key="blog.path" :post="blog" />
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getMetaData from "@/config/getMetaData.js";
const { path } = useRoute();
const tableOfContents = ref([]);
const wordCount = ref(0);

const { data: blog } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/blog").where({ _path: path }).findOne();
});

const { data: moreBlogs } = await useAsyncData(`more-content-${path}`, () => {
  return queryContent("/blog")
    .where({ _path: { $ne: path } })
    .find();
});

const getWordCount = () => {
  const wpm = 250;
  const body = document.querySelector(".content__info + div");
  const words = body.textContent.trim().split(/\s+/).length;

  wordCount.value = Math.ceil(words / wpm);
};
onMounted(() => {
  const headers = Array.from(document.querySelectorAll(".content h2"));
  headers.forEach((header) => {
    const headerObj = {};
    headerObj.text = header.textContent;
    headerObj.link = header.id;
    tableOfContents.value.push(headerObj);
  });
  getWordCount();
});

const getMeta = () => {
  const metaData = {
    type: "article",
    url: `https://traekwells.com${path}`,
    title: blog.value.title,
    description: blog.value.summary,
    image: blog.value.previewImage,
  };
  return getMetaData(
    metaData,
    {
      property: "article:published_time",
      content: blog.value.createdAt,
    },
    {
      property: "article:modified_time",
      content: blog.value.updatedAt,
    },
    { name: "twitter:label1", content: "Written by" },
    { name: "twitter:data1", content: "Traek Wells" }
  );
};
useHead({
  meta: getMeta,
  title: blog.value.title,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com${path}`,
    },
  ],
});
</script>
