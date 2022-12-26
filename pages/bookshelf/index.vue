<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <div class="header__content">
          <h1>Bookshelf</h1>
          <p class="lead mb-4">
            Here's a collection of the books I've either read or listened to and
            my thoughts about them.
          </p>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <div class="books">
          <Book v-for="book in books" :key="book._path" :book="book" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import getMetaData from "@/config/getMetaData.js";

const { data: books } = await useAsyncData("books", () => {
  return queryContent("/bookshelf").find();
});
const getMeta = () => {
  const metaData = {
    type: "page",
    url: `https://traekwells.com/bookshelf`,
    title: "Bookshelf",
    description:
      "Heres a collection of the books I've either read or listened to and my thoughts about them.",
  };

  return getMetaData(metaData);
};
useHead({
  meta: getMeta,
  title: "Bookshelf",
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `https://traekwells.com/bookshelf`,
    },
  ],
});
</script>
