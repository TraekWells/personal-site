<template>
  <PageHeader eyebrow="Journal" title="Other thoughts">
    <p class="lead">
      This is a place for me to share anything that doesn't fit into my normal
      <NuxtLink to="/blog">blog</NuxtLink> topics. Most likely about life, being
      productive and ants.
    </p>
  </PageHeader>
  <main id="main">
    <section class="section">
      <div class="wave-white"></div>
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
