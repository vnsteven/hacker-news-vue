<template>
  <div class="list-view">
    <Pagination
      :length="length"
      :page="page"
      :path="path"
      :pages-total="pagesTotal"
      :prev="prev"
      :next="next"
      :allow-prev="allowPrev"
      :allow-next="allowNext"
    />
    <Loader :loading="loading">
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
import { Loader } from 'components/UI';
import { StoryItem, Pagination } from 'components/stories';
import Api from 'api';

const api = new Api();

export default {
  name: 'Stories',

  components: {
    StoryItem,
    Pagination,
    Loader
  },

  data() {
    const pagination = {
      page: parseInt(this.$route.query.page, 10) || 1,
      pagesTotal: 0,
      allowNext: false,
      allowPrev: false
    };

    const stories = {
      stories: [],
      length: 0
    };

    const utils = {
      path: this.$route.path,
      loading: true
    };

    return {
      ...pagination,
      ...stories,
      ...utils
    };
  },

  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.page = 1;
      }
      this.path = to.path;
      this.fetchData(this.path, this.page);
    }
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;
      const data = await api.fetchData(this.path, parseInt(this.page, 10));

      this.stories = data;
      this.length = api.dataLength;
      this.pagesTotal = Math.floor(api.dataLength / 10);
      this.handleNextVisibility();
      this.handlePrevVisibility();
      this.loading = false;
    },

    handleNextVisibility() {
      this.allowNext = true;
      if (this.page === this.pagesTotal) {
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
      if (this.page < this.pagesTotal) {
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
