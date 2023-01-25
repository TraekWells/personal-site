<template>
  <main id="main" class="post">
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
            <TableOfContents :headers="tableOfContents" />
          </div>
        </div>
      </div>
    </article>
    <article class="section pb-7">
      <div class="container container--narrow">
        <FancyHeader title="More stuff I've written" />
        <div class="blogs">
          <BlogCard v-for="blog in moreBlogs" :key="blog.path" :post="blog" />
        </div>
      </div>
    </article>
    <section class="section">
      <div class="container container--narrow">
        <CallToAction />
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getMetaData from "@/config/getMetaData.js";
const { path } = useRoute();
const tableOfContents = ref([]);
// const wordCount = ref(0);

let queryPath = path;
if (queryPath[queryPath.length - 1] === "/") {
  queryPath = queryPath.replace(/.$/, "");
}

const { data: blog } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/blog").where({ _path: queryPath }).findOne();
});

const { data: moreBlogs } = await useAsyncData(`more-content-${path}`, () => {
  return queryContent("/blog")
    .where({ _path: { $ne: path } })
    .find();
});

// const getWordCount = () => {
//   const wpm = 250;
//   const body = document.querySelector(".content__info + div");
//   const words = body.textContent.trim().split(/\s+/).length;

//   wordCount.value = Math.ceil(words / wpm);
// };
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
