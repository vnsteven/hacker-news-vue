<template>
  <div v-if="story" class="list-item">
    <div class="left">
      <span>{{ story.score }}</span>
    </div>
    <div class="right">
      <a
        :href="story.url"
        target="_blank"
        rel="noopener"
        class="title"
      >
        {{ story.title }}
      </a>
      <p class="subtitle">
        by <router-link tag="span" :to="'/user/' + story.by">{{ story.by }}</router-link>
        {{ convertTimestamp }} ago |
        <router-link tag="span" :to="'/item/' + story.id">
          {{ commentsNumber }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryItem',
  props: ['story'],
  computed: {
    commentsNumber() {
      if (this.story.kids) return `${this.story.kids.length} comments`;
      return '0 comment';
    },
    convertTimestamp() {
      return this.$moment(this.story.time * 1000).fromNow();
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  width: var(--width);
  height: 5rem;
  border-bottom: 1px solid var(--grey);
  background-color: var(--white);
  box-sizing: border-box;

  @media screen and (max-width: 740px) {
    width: 95vw;
  }

  .left {
    flex: 0.2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    font-weight: var(--bold);
    font-size: 1.2rem;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .subtitle {
      font-size: 0.8rem;
      color: var(--dark-grey);

      span {
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
