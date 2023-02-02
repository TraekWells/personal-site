<template>
  <PageHeader eyebrow="Writing" title="Some blogs that I’ve written">
    <p class="lead">
      Posts about topics ranging from User Experience, User Interface design,
      HTML, CSS, JavaScript and accessibility. See my
      <NuxtLink to="/journal">journal</NuxtLink> for everything else.
    </p>
  </PageHeader>
  <main id="main">
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <div class="blogs">
          <BlogCard v-for="blog in blogs" :key="blog.path" :post="blog" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData.js";

const { data: blogs } = await useAsyncData("blogs", () => {
  return queryContent("/blog").where({ draft: false }).find();
});

const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/blog`,
    title: "Blog",
    description:
      "A blog where I share what I've learned in the design and front-end development fields.",
  };

  return getMetaData(metaData);
};
useHead({
  title: "Blog",
  meta: getMeta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/blog`,
    },
  ],
});
</script>
