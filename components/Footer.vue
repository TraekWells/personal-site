<template>
  <footer class="footer">
    <div class="wave-purple"></div>
    <div class="container">
      <div class="d-grid-two-columns">
        <div class="d-grid__column"></div>
        <div class="d-grid__column">
          <p><strong>Pages</strong></p>
          <ul>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
          </ul>
          <p><strong>Social Media</strong></p>
          <ul>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
          </ul>
        </div>
      </div>
      <p>Connect With Me</p>
      <p>
        &copy; Traek Wells {{ date }}. Built with
        <a href="https://nuxt.com/" target="_blank" rel="noreferrer">Nuxt</a>.
        <a
          href="https://github.com/TraekWells/personal-dev-site"
          target="_blank"
          rel="noreferrer"
          >Source Code.</a
        >
        🐜
      </p>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";

const date = ref(0);

onMounted(() => {
  const year = new Date().getFullYear();
  date.value = year;
});
</script>
