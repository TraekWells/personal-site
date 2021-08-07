<template>
  <div class="note">
    <InfoIcon />
    <p><slot></slot></p>
  </div>
</template>

<script>
import { InfoIcon } from 'vue-feather-icons'
export default {
  components: { InfoIcon },
}
</script>

<style lang="scss">
.note {
  background-color: var(--color-primary-100);
  border-radius: var(--border-radius-xsm);
  padding: 2rem;
  position: relative;
  margin: 2rem 0;

  svg {
    outline: 0.5rem solid var(--color-white);
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-white);
    border-radius: 50%;
    color: var(--color-primary-500);
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }
}
</style>
