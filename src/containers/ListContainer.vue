<template>
  <div class="list-container">
    <div v-bind:key="story.id" v-for="story in stories">
      <ListItem v-bind:story="story"/>
    </div>
  </div>
</template>

<script>
import ListItem from 'components/ListItem';
import Api from 'api';

const api = new Api();

export default {
  name: 'ListContainer',

  components: {
    ListItem
  },

  data() {
    return {
      stories: []
    }
  },

  async mounted() {
    const data = await api.fetchData();
    this.stories = data;
  }
};
</script>

<style lang="scss">
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
  min-height: 10rem;
}
</style>
