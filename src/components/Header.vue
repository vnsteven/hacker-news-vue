<template>
  <div class="header">
    <div class="navigation">
      <router-link
        :to="{ path: 'top', query: { page: 1 } }"
        :class="handleDisable('top')"
      >
        Top
      </router-link>
      <router-link
        :to="{ path: 'new', query: { page: 1 } }"
        :class="handleDisable('new')"
      >
        New
      </router-link>
      <router-link
        :to="{ path: 'best', query: { page: 1 } }"
        :class="handleDisable('top')"
      >
        Best
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleDisable(path) {
      if (this.$route.path === `/${path}`) {
        return 'disabled';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 3.5rem;
  top: 0;
  background-color: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;

  .navigation {
    width: 45rem;

    a {
      font-size: 1.2rem;
      color: var(--white);
      margin-right: 1rem;
    }

    .router-link-active {
      pointer-events: none;
      font-weight: 800;

      &::before {
        content: "";
        position: absolute;
        margin-top: 2.4rem;
        width: 3rem;
        margin-left: -4px;
        height: 5px;
        background-color: var(--brown);
      }
    }
  }
}
</style>
