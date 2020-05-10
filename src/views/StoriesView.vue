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
    />
    <Loader :loading="isLoading">
      <div
        v-for="story in stories"
        :key="story.id"
      >
        <StoryItem :story="story" />
      </div>
    </Loader>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { Loader } from 'components/UI';
import { StoryItem, Pagination } from 'components/stories';

export default {
  name: 'Stories',

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
    }
  },

  mounted() {
    this.fetchData();
  },

  computed: {
    ...mapState(['stories', 'isLoading']),
    ...mapGetters({ pageCount: 'getPageCount' })
  },

  methods: {
    fetchData() {
      const data = { path: this.path, page: parseInt(this.page, 10) };
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
