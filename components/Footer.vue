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
          ><TwitterIcon aria-label="Link to Twitter"></TwitterIcon
        ></a>
        <a
          href="https://github.com/TraekWells"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to GitHub"
          ><GithubIcon aria-label="Link to Github"></GithubIcon
        ></a>
        <a
          href="https://www.instagram.com/traekwells/"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Instagram"
          ><InstagramIcon aria-label="Link to Instagram"></InstagramIcon
        ></a>
        <a
          href="https://www.linkedin.com/in/traekwells/"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to LinkedIn"
          ><LinkedinIcon aria-label="Link to LinkedIn"></LinkedinIcon
        ></a>
        <a
          href="https://dribbble.com/TraekWells"
          class="social-icon"
          target="_blank"
          rel="noreferrer noopener"
          alt="Link to Dribbble"
          ><DribbbleIcon aria-label="Link to Dribbble"></DribbbleIcon
        ></a>
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

<script>
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  DribbbleIcon,
} from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    GithubIcon,
    LinkedinIcon,
    DribbbleIcon,
  },
  data() {
    return {
      date: '',
    }
  },
  mounted() {
    const year = new Date().getFullYear()
    this.date = year
  },
}
</script>
