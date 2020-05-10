<template>
  <div class="header">
    <div class="nav-bar">
      <div class="navigation">
        <NavLink label="top" />
        <NavLink label="new" />
        <NavLink label="best" />
      </div>
      <div class="search-bar">
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script>
import { NavLink, SearchBar } from 'components/header';

export default {
  name: 'Header',
  components: {
    NavLink,
    SearchBar
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

  .nav-bar {
    display: flex;
    width: 45rem;
    height: inherit;

    .navigation {
      display: flex;
      flex: 0.5;
      height: inherit;
    }

    .search-bar {
      flex: 0.5;
    }
  }
}
</style>
