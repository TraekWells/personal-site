<template>
  <template v-if="error.statusCode === '404'">
    <Navbar />
    <div class="section mt-6">
      <div class="container container--narrow">
        <h1 class="text-center">Page not found</h1>
        <NuxtLink to="/" class="read-more justify-content-center"
          >Go to homepage <Icon name="uil:arrow-right" height="26" width="26"
        /></NuxtLink>
      </div>
    </div>
    <Footer />
  </template>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
