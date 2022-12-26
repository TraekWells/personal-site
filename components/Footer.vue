<template>
  <footer class="footer">
    <div class="wave-white"></div>
    <div class="container">
      <p>Connect With Me</p>
      <div class="social-icons">
        <a
          href="https://twitter.com/TraekWells"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Twitter"
          ><Icon name="uil:twitter" height="26" width="26"
        /></a>
        <a
          href="https://github.com/TraekWells"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to GitHub"
          ><Icon name="uil:github" height="26" width="26"
        /></a>
        <a
          href="https://www.instagram.com/traekwells/"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Instagram"
          ><Icon name="uil:instagram" height="26" width="26"
        /></a>
        <a
          href="https://www.linkedin.com/in/traekwells/"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to LinkedIn"
          ><Icon name="uil:linkedin" height="26" width="26"
        /></a>
        <a
          href="https://dribbble.com/TraekWells"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Dribbble"
          ><Icon name="uil:dribbble" height="26" width="26"
        /></a>
      </div>
      <p>
        &copy; Traek Wells {{ date }}. Built with Nuxt.
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
