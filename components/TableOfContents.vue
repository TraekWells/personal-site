<template>
  <p>Table of Contents</p>
  <ul>
    <li v-for="header in headers" :key="header.id">
      <a :href="`#${header.link}`">{{ header.text }}</a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Object,
  },
});
</script>
