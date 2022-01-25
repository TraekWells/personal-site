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

<style lang="scss">
.footer {
  padding: 5rem 0;
  text-align: center;
  margin-top: auto;
  position: relative;

  .wave-white {
    position: absolute;
    background-image: url('/img/wave-white.svg');
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    right: 0;
    top: -10rem;
    height: 10rem;
    z-index: 0;
  }
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  font-size: 1.6rem;
}

.social-icon {
  background-color: var(--color-primary-100);
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border-bottom: none;

  &:hover {
    transform: translateY(-1rem);
    border-bottom: none;
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
}
</style>
