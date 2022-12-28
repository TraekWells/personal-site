<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Journal</h1>
          <p class="lead mb-4">
            This is a place for me to share anything that doesn't fit into my
            normal
            <NuxtLink to="/blog">blog</NuxtLink> topics. Most likely about life,
            being productive and ants.
          </p>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <div class="blogs">
          <BlogCard
            v-for="journal in journals"
            :key="journal.path"
            :post="journal"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData.js";
const { data: journals } = await useAsyncData("journals", () => {
  return queryContent("/journal")
    .where({ draft: false })
    .sort({ createdAt: -1 })
    .find();
});
const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/journal`,
    title: "Journal",
    description:
      "This is a place for me to share anything that doesn't fit into my normal blog topics. Most likely about life, being productive and ants.",
  };

  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  title: "Journal",
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/journal`,
    },
  ],
});
</script>
