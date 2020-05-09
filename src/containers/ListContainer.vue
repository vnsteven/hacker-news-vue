<template>
  <div class="list-container">
    <Pagination
      :length="length"
      :page="page"
      :path="path"
      :prev="prev"
      :next="next"
      :allowPrev="allowPrev"
      :allowNext="allowNext"
    />
    <div :key="story.id" v-for="story in stories">
      <ListItem :story="story"/>
    </div>
  </div>
</template>

<script>
import ListItem from 'components/ListItem';
import Pagination from 'components/Pagination';
import Api from 'api';

const api = new Api();

export default {
  name: 'ListContainer',

  components: {
    ListItem,
    Pagination
  },

  data() {
    const pagination = {
      page: parseInt(this.$route.query.page) || 1,
      allowNext: false,
      allowPrev: false
    };

    const stories = {
      stories: [],
      length: 0
    };

    return {
      ...pagination,
      ...stories,
      path: this.$route.path
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const page = this.$route.query.page || 1;
      const data = await api.fetchData(this.path, parseInt(page));

      this.stories = data;
      this.length = api.dataLength;
      this.handleNextVisibility();
      this.handlePrevVisibility();
    },

    handleNextVisibility() {
      this.allowNext = true;
      if (this.page === api.dataLength / 10) {
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
      if (this.page < api.dataLength / 10) {
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
}
</style>
