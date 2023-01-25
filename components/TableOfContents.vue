<template>
  <p class="eyebrow">Table of Contents</p>
  <ul>
    <li v-for="header of headers" :key="header.id">
      <NuxtLink :to="`#${header.link}`">{{ header.text }}</NuxtLink>
      <!-- <a :href="`#${header.link}`">{{ header.text }}</a> -->
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
  },
});
</script>
