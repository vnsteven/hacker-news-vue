<template>
  <div class="list-item">
    <div class="list-item--left">
      <span>223</span>
    </div>
    <div class="list-item--right">
      <p>Title</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem"
};
</script>

<style lang="scss">
.list-item {
  display: flex;
  width: 50rem;
  height: 5rem;
  border-bottom: 1px solid var(--grey);
  background-color: var(--white);
  box-sizing: border-box;

  &--left {
    flex: 0.2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    font-weight: 800;
    font-size: 1.2rem;
  }

  &--right {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
}
</style>
