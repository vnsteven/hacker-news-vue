<template>
  <div class="search-bar">
    <div class="icon">
      <SearchIcon />
    </div>
    <input
      :value="value"
      placeholder="Rechercher"
    >
  </div>
</template>

<script>
import { SearchIcon } from 'components/UI';

export default {
  name: 'SearchBar',
  components: {
    SearchIcon
  },
  props: ['value']
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  height: 100%;

  input {
    margin: 0 1rem;
    padding-left: 3rem;
    height: 2.5rem;
    width: 100%;
    border-radius: 4px;
  }

  .icon {
    position: relative;
    left: 1.5rem;
    top: 3px;
    width: 1px;
  }
}
</style>
