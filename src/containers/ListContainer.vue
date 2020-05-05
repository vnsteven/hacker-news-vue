<template>
  <div class="list-container">
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
  </div>
</template>

<script>
import ListItem from 'components/ListItem';

export default {
  name: 'ListContainer',
  components: {
    ListItem
  }
};
</script>

<style lang="scss">
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  min-height: 10rem;
}
</style>
