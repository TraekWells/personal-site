<template>
  <footer class="footer">
    <div class="wave-purple"></div>
    <div class="container container--narrow">
      <div class="d-grid-two-columns">
        <div class="d-grid__column">
          <img
            class="image-rounded image-small"
            src="/img/footer-image.jpg"
            alt="An image of Traek Wells"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est alias
            tenetur modi ad esse nisi.
          </p>
        </div>
        <div class="d-grid__column">
          <div class="d-grid-two-columns">
            <div class="d-grid__column">
              <p><strong>Pages</strong></p>
              <ul class="list-unstyled">
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li><NuxtLink to="/projects">Projects</NuxtLink></li>
                <li><NuxtLink to="/process">Process</NuxtLink></li>
                <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                <li><NuxtLink to="/about-me">About Me</NuxtLink></li>
              </ul>
            </div>
            <div class="d-grid__column">
              <p><strong>Social Media</strong></p>
              <ul class="list-unstyled">
                <li>
                  <NuxtLink to="https://twitter.com/TraekWells" target="_blank"
                    >Twitter</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="https://www.linkedin.com/in/traekwells/"
                    target="_blank"
                    >LinkedIn</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="https://www.instagram.com/traekwells/"
                    target="_blank"
                    >Instagram</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="https://dribbble.com/TraekWells" target="_blank"
                    >Dribbble</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="https://github.com/TraekWells" target="_blank"
                    >GitHub</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-4">
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
