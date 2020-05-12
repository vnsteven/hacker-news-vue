<template>
  <div class="container" v-if="story">
    <div class="header">
      <a
        :href="story.url"
        target="_blank"
        rel="noopener"
        class="title"
      >
        <h1>{{ story.title }}</h1>
      </a>
      <p class="subtitle">
        <span class="by">{{ story.by }}</span>
        {{ convertTimestamp }} ago |
        <span>{{ comments.length }} commentaires</span>
      </p>
    </div>
      <div class="comments">
        <Loader :loading="isCommentLoading">
          <div :key="comment ? comment.id : null" v-for="comment in comments">
            <CommentItem :comment="comment" />
          </div>
        </Loader>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { CommentItem, Loader } from 'components';
import Api from '../api';

export default {
  name: 'CommentsView',

  components: {
    CommentItem,
    Loader
  },

  data() {
    return {
      story: null
    };
  },

  computed: {
    ...mapState(['stories', 'comments', 'isCommentLoading']),
    convertTimestamp() {
      return this.$moment(new Date(this.story.time * 1000)).fromNow();
    }
  },

  async mounted() {
    const api = new Api();
    const story = await api.getStoryItem(this.$route.params.id);
    this.story = story.data;
    this.$store.dispatch('FETCH_COMMENTS', { story: story.data });
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
  min-height: 10rem;

  .header {
    width: 45rem;
    padding: 1rem 3rem;
    margin-bottom: 1rem;
    background-color: var(--white);

    .subtitle {

      .by {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .comments {
    width: 45rem;
    padding: 2rem 3rem;
    background-color: var(--white);

    @media screen and (max-width: 740px) {
      width: 95vw;
    }
  }
}
</style>
