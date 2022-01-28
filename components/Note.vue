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
