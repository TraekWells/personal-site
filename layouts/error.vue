<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>Uh Oh. Get Lost?</h1>
      </div>
    </header>
    <section class="section">
      <div class="container container--narrow">
        <p>Let me try to help you get back on track</p>
        <nuxt-link to="/" class="read-more"
          >Go Home <ArrowRightIcon></ArrowRightIcon
        ></nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowRightIcon,
  },
}
</script>

<style lang="scss">
.read-more {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  border-bottom: none;

  svg {
    transition: 0.2s ease transform;
    margin-left: 1rem;
  }

  &:hover {
    border-bottom: none;

    svg {
      transform: translateX(1rem);
    }
  }
}
</style>
