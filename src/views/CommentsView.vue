<template>
  <div>
    hi
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CommentsView',

  computed: {
    ...mapState(['stories'])
  },

  mounted() {
    const story = this.stories.find((item) => item.id === parseInt(this.$route.params.id, 10));
    this.$store.dispatch('FETCH_COMMENTS', { story });
  }
};
</script>

<style lang="scss" scoped>

</style>
