<template>
  <div class="list-container">
    <Pagination
      :length="length"
      :page="page"
      :path="path"
      :pagesTotal="pagesTotal"
      :prev="prev"
      :next="next"
      :allowPrev="allowPrev"
      :allowNext="allowNext"
    />
    <Loader :loading="loading">
      <div :key="story.id" v-for="story in stories">
        <StoryItem :story="story"/>
      </div>
    </Loader>
  </div>
</template>

<script>
import { Loader } from 'components/UI';
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
      page: parseInt(this.$route.query.page) || 1,
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

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;
      const data = await api.fetchData(this.path, parseInt(this.page));

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
  },

  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.page = 1;
      }
      this.path = to.path;
      this.fetchData(this.path, this.page);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.5rem;
  padding-bottom: 1rem;
  min-height: 10rem;
  width: 100%;
}
</style>
