<template>
  <div class="loader">
    <div v-if="loading">
      <BeatLoader color="var(--primary)" />
    </div>
    <transition :name="transition">
      <div v-if="!loading">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader';

export default {
  components: {
    BeatLoader
  },
  props: ['loading', 'transition']
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;

  .slide-fade {
    &-enter-active {
      position: absolute;
      transition: all .3s ease;
    }

    &-leave-active {
      position: absolute;
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    &-enter,
    &-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }
  }
}
</style>
