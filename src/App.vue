<template>
  <div class="app">
    <Header />
    <ListContainer />
  </div>
</template>

<script>
import Header from 'components/Header';
import ListContainer from 'containers/ListContainer';

export default {
  name: 'app',
  components: {
    Header,
    ListContainer
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary: #FF6601;
  --white: #FFFFFF;
  --grey: #F2F3F5;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  background-color: var(--grey);
}
</style>
