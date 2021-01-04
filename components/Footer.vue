<template>
  <div class="footer">
    <p>Connect With Me</p>
    <div class="social-icons">
      <a
        href="https://twitter.com/TraekWells"
        class="social-icon"
        target="_blank"
        >Twitter</a
      >
      <a
        href="https://github.com/TraekWells"
        class="social-icon"
        target="_blank"
        >GitHub</a
      >
      <a
        href="https://codepen.io/traekwells"
        class="social-icon"
        target="_blank"
        >CodePen</a
      >
      <a
        href="https://www.instagram.com/traekwells/"
        class="social-icon"
        target="_blank"
        >Instagram</a
      >
      <a
        href="https://www.linkedin.com/in/traekwells/"
        class="social-icon"
        target="_blank"
        >LinkedIn</a
      >
    </div>
    <p>&copy; Traek Wells 2020</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  padding: 5rem 0;
  text-align: center;
  margin-top: auto;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.social-icon {
  &:not(:last-child) {
    margin-right: 3rem;
  }
}
</style>
