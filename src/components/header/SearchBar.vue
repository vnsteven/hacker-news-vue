<template>
  <div class="search-bar">
    <div class="icon">
      <SearchIcon />
    </div>
    <input
      v-model.lazy="searchValue"
      @input="updateValue"
      placeholder="Rechercher"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchIcon from '../UI/SearchIcon.vue';

export default {
  name: 'SearchBar',
  components: {
    SearchIcon
  },
  computed: {
    ...mapState(['searchValue'])
  },
  methods: {
    updateValue(e) {
      this.$store.commit('UPDATE_SEARCH_VALUE', { value: e.target.value });
    }
  }
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
