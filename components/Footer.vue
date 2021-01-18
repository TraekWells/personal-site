<template>
  <footer class="footer">
    <div class="container">
      <p>Connect With Me</p>
      <div class="social-icons">
        <a
          href="https://twitter.com/TraekWells"
          class="social-icon"
          target="_blank"
          ><TwitterIcon></TwitterIcon> Twitter</a
        >
        <a
          href="https://github.com/TraekWells"
          class="social-icon"
          target="_blank"
          ><GithubIcon></GithubIcon> GitHub</a
        >
        <a
          href="https://codepen.io/traekwells"
          class="social-icon"
          target="_blank"
          ><CodepenIcon></CodepenIcon> CodePen</a
        >
        <a
          href="https://www.instagram.com/traekwells/"
          class="social-icon"
          target="_blank"
          ><InstagramIcon></InstagramIcon> Instagram</a
        >
        <a
          href="https://www.linkedin.com/in/traekwells/"
          class="social-icon"
          target="_blank"
          ><LinkedinIcon></LinkedinIcon> LinkedIn</a
        >
      </div>
      <p>&copy; Traek Wells. {{ date }}.</p>
    </div>
  </footer>
</template>

<script>
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  CodepenIcon,
} from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    GithubIcon,
    LinkedinIcon,
    CodepenIcon,
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
  background-color: var(--color-secondary-100);
  padding: 5rem 0;
  text-align: center;
  margin-top: auto;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  font-size: 1.8rem;
}

.social-icon {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;

  &:hover {
    border-bottom: none;
  }

  svg {
    margin-right: 1rem;
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
}
</style>
