<template>
  <div class="container">
    <Loader :loading="isUserLoading">
      <div class="header" v-if="user">
        <div class="header-left">
          <div class="info">
            <h1>{{ user.id }}</h1>
            <p>joined {{ convertTimestamp }}</p>
          </div>
          <div class="text" v-html="fitText" />
        </div>
        <div class="header-right">
          <p class="karma">{{ user.karma }}</p>
        </div>
      </div>

      <div class="stories" v-for="story in userStories" :key="story ? story.id : null">
        <StoryItem :story="story" v-if="story.score"/>
      </div>
    </Loader>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { StoryItem, Loader } from 'components';

export default {
  name: 'UserView',

  components: {
    StoryItem,
    Loader
  },

  computed: {
    ...mapState(['user', 'userStories', 'isUserLoading']),
    convertTimestamp() {
      return this.$moment(this.user.created * 1000).fromNow();
    },
    fitText() {
      let ellipsis = '';
      const limit = 40 * 6;
      const { about } = this.user;

      if (!about) return null;
      if (about.length >= limit) ellipsis = '...';
      return about.substr(0, 40 * 6) + ellipsis;
    }
  },

  mounted() {
    this.$store.dispatch('FETCH_USER', { id: this.$route.params.id });
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
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    width: var(--width);
    padding: 1rem 3rem;
    margin-bottom: 1rem;
    background-color: var(--white);

    @media screen and (max-width: 740px) {
      width: 95vw;
    }

    &-left {
      .info {
        width: 100%;
        font-size: 0.8rem;
        margin-bottom: 1rem;

        p {
          color: var(--dark-grey);
          font-style: italic;
        }
      }

      .text {
        font-size: 0.8rem;

        p {
          line-break: auto;
        }
      }

      @media screen and (max-width: 740px) {
        width: 95vw;
      }
    }

    &-right {
      height: 100%;

      .karma {
        font-size: 1.5rem;
        color: var(--primary);
        font-weight: var(--bold);
      }

      @media screen and (max-width: 740px) {
        flex: 0.5;
      }
    }
  }

  .stories {
    @media screen and (max-width: 740px) {
      width: 95vw;
    }
  }
}
</style>
