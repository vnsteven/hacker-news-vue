<template>
  <div class="list-item">
    <div class="left">
      <span>{{story.score}}</span>
    </div>
    <div class="right">
      <a :href="story.url" target="_blank" class="title">
        {{story.title}}
      </a>
      <p class="subtitle">
        by <span>{{story.by}}</span>
        {{ story.time | moment("from", "now") }} ago |
        <span>{{story.kids ? story.kids.length : 0}} comments</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["story"]
};
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  width: 45rem;
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
    font-weight: 800;
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
      }
    }
  }
}
</style>
