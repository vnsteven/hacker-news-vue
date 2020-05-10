<template>
  <div class="sub-header">
    <div class="pagination">
      <router-link
        :to="handleRouter"
        :class="{ disabled: !allowPrev }"
      >
        <p @click="prev">< prev</p>
      </router-link>
      <p>{{ page }}/{{ pagesTotal }}</p>
      <router-link
        :to="handleRouter"
        :class="{ disabled: !allowNext }"
      >
        <p @click="next">next ></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: [
    'length', 'page', 'path', 'prev', 'next',
    'allowNext', 'allowPrev', 'pagesTotal'
  ],
  computed: {
    handleRouter() {
      return {
        path: this.path,
        query: { page: this.page }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-header {
  position: fixed;
  width: 100%;
  top: 3.5rem;
  height: 3rem;
  background-color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  .pagination {
    display: flex;
    justify-content: center;

    .disabled {
      visibility: hidden;
    }

    p {
      padding: 0 0.5rem;
    }
  }
}
</style>
