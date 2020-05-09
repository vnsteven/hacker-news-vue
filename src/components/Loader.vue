<template>
  <div>
    <div :class="['loader', loading ? null : 'hidden'].join(' ')">
      <BeatLoader color="var(--primary)" />
    </div>
    <div :class="loading ? 'hidden' : null">
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
  margin-top: 10rem;
  width: 100%;
}

.hidden {
  display: none;
}
</style>
