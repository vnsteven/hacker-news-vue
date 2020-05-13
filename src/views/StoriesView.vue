<template>
  <div class="list-view">
    <Pagination
      :page="page"
      :path="path"
      :page-count="pageCount"
      :prev="prev"
      :next="next"
      :allow-prev="allowPrev"
      :allow-next="allowNext"
      :is-empty="isEmpty"
    />
    <div v-if="isEmpty">
      <Loader :loading="isCurrentLoading" :transition="'slide-fade'">
        <div v-for="story in stories" :key="story ? story.id : null">
          <StoryItem :story="story" />
        </div>
      </Loader>
    </div>
    <div v-else>
      <Loader :loading="isAllLoading">
        <div v-for="story in searchResults(path)" :key="story ? story.id : null">
          <StoryItem v-show="story" :story="story" />
        </div>
      </Loader>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { StoryItem, Pagination, Loader } from 'components';
import { formatPath } from '../util';

export default {
  name: 'StoriesView',

  components: {
    StoryItem,
    Pagination,
    Loader
  },

  data() {
    return {
      page: parseInt(this.$route.query.page, 10) || 1,
      allowNext: false,
      allowPrev: false,
      path: this.$route.path
    };
  },

  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.page = 1;
      }
      this.path = to.path;
      this.fetchData();
      this.fetchAll();
    }
  },

  mounted() {
    this.fetchData();
    this.fetchAll();
  },

  computed: {
    ...mapState([
      'stories',
      'allStories',
      'isCurrentLoading',
      'isAllLoading',
      'isEmpty'
    ]),
    ...mapGetters({
      pageCount: 'getPageCount',
      searchResults: 'getSearchResult'
    })
  },

  methods: {
    fetchAll() {
      const label = formatPath(this.path);

      if (!this.allStories[label].length) {
        this.$store.dispatch('FETCH_ALL', { label });
      }
    },

    fetchData() {
      const data = { path: this.path, page: parseInt(this.page, 10) };
      this.$store.dispatch('FETCH_DATA', data);

      this.handleNextVisibility();
      this.handlePrevVisibility();
    },

    handleNextVisibility() {
      this.allowNext = true;
      if (this.page === this.pageCount) {
        this.allowNext = false;
      }
    },

    handlePrevVisibility() {
      this.allowPrev = true;
      if (this.page === 1) {
        this.allowPrev = false;
      }
    },

    prev() {
      if (this.page > 1) {
        this.page -= 1;
      }
    },

    next() {
      if (this.page < this.pageCount) {
        this.page += 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.5rem;
  padding-bottom: 1rem;
  min-height: 10rem;
  width: 100%;
}
</style>
