<template>
  <transition name="slide-fade">
    <div v-if="isEmpty" class="sub-header">
      <div class="pagination">
        <router-link :to="handleRouter" :class="{ disabled: !allowPrev }">
          <p @click="prev">
            &lt; prev
          </p>
        </router-link>
        <p>{{ page }}/{{ pageCount }}</p>
        <router-link :to="handleRouter" :class="{ disabled: !allowNext }">
          <p @click="next">
            next &gt;
          </p>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Pagination',
  props: [
    'length', 'page', 'path', 'prev', 'next',
    'allowNext', 'allowPrev', 'pageCount', 'isEmpty'
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
  left: 0;
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

.slide-fade {
  &-enter-active {
    z-index: -1;
    transition: all .2s ease;
  }

  &-leave-active {
    z-index: -1;
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  &-enter,
  &-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>
