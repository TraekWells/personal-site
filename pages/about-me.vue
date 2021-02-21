<template>
  <main>
    <header class="header">
      <div class="container container--narrow">
        <h1>About Me</h1>
      </div>
    </header>
    <section class="section">
      <div class="wave-white"></div>
      <div class="container container--narrow">
        <p class="text-center">
          TODO: Tell the world a little bit about yourself.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'About',
      description:
        'A little bit about Traek Wells and how he got started in Web Development',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>

<style></style>
