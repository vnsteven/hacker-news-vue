<template>
  <div :class="['nav-link', handleActive()].join(' ')">
    <router-link :to="{ path: label, query: { page: 1 } }">
      {{ label.charAt(0).toUpperCase() + label.slice(1) }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['label'],
  methods: {
    handleActive() {
      if (this.$route.path === `/${this.label}`) {
        return 'nav-link-active';
      }
    }
  }
}
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
    font-size: 1.2rem;
    color: var(--white);
  }

  .router-link-active {
    pointer-events: none;
    font-weight: 800;
  }
}
</style>
