<template>
  <div class="header">
    <div class="navigation">
      <NavLink label="top" />
      <NavLink label="new" />
      <NavLink label="best" />
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink';

export default {
  name: 'Header',
  components: {
    NavLink
  },
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
    display: flex;
    width: 45rem;
    height: 100%;
  }
}
</style>
