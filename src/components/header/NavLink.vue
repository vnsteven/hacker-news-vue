<template>
  <div :class="['nav-link', isActive]">
    <router-link :to="handleRouter" replace>
      {{ capitalizedLabel }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['label'],
  computed: {
    capitalizedLabel() {
      return this.label.charAt(0).toUpperCase() + this.label.slice(1);
    },
    isActive() {
      if (this.$route.path !== `/${this.label}`) return null;
      return 'nav-link-active';
    },
    handleRouter() {
      return { path: `/${this.label}`, query: { page: 1 } };
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5rem;

  &-active {
    border-bottom: 3px solid var(--brown);
  }

  a {
    font-size: 1.1rem;
    color: var(--white);
  }

  .router-link-active {
    pointer-events: none;
    font-weight: var(--bold);
  }
}
</style>
