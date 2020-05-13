<template>
  <div v-if="comment" class="item-container">
    <div class="comment">
      <div class="info">
        <p class="by">{{ comment.by }}</p>
        <p>{{ convertTimestamp }}</p>
      </div>
      <div v-html="comment.text" />
    </div>
    <div class="section-line">
      <p class="sign" @click="handleCollapse" v-if="comment.kids">
        [{{ displaySign }}]
      </p>
      <p class="comments-length" v-if="comment.kids && !isVisible">
        {{ comment.kids.length }} commentaires
      </p>
      <div class="line" />
    </div>
    <div class="item-kids" v-if="comment.kids && isVisible">
      <div :key="kid ? kid.id : null" v-for="kid in comment.kids">
        <CommentItem :comment="kid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',

  props: ['comment'],

  data() {
    return {
      isVisible: true
    };
  },

  computed: {
    convertTimestamp() {
      return this.$moment(new Date(this.comment.time * 1000)).fromNow();
    },
    displaySign() {
      if (this.isVisible) return '-';
      return '+';
    }
  },

  methods: {
    handleCollapse() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.item-container {
  line-height: 1.5;
  letter-spacing: 0;
  font-size: 0.9rem;

  .comment {
    padding: 1rem 0;

    .info {
      display: flex;
      flex-direction: row;
      font-size: 0.8rem;
      color: var(--dark-grey);
      margin-bottom: 1rem;

      .by {
        cursor: pointer;
        text-decoration: underline;
        margin-right: 0.5rem;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .section-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .comments-length {
      color: var(--dark-grey);
      font-size: 0.8rem;
    }

    .sign {
      cursor: pointer;
      width: 1rem;
    }

    .line {
      flex: 0.99;
      height: 1px;
      background-color: var(--grey);
    }
  }

  .item-kids {
    padding-left: 1rem;
  }
}
</style>
