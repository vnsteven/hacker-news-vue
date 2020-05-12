<template>
  <div class="loader">
    <div v-if="loading">
      <BeatLoader color="var(--primary)" />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader';

export default {
  components: {
    BeatLoader
  },
  props: ['loading']
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}
</style>
