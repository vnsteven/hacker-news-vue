<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from 'components/Header';

export default {
  name: 'app',
  components: {
    Header
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
  --dark-grey: #6d6875;
  --black: #34495E;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  color: var(--black);
  line-height: 1.6;
  background-color: var(--grey);
}

a {
  text-decoration: none;
  color: var(--black);
}
</style>
