<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch('FETCH_ALL', { label: 'top' });
    this.$store.dispatch('FETCH_ALL', { label: 'new' });
    this.$store.dispatch('FETCH_ALL', { label: 'best' });
  }
};
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
  --brown: #EABE7C;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: var(--black);
  line-height: 1.6;
  background-color: var(--grey);
}

a {
  text-decoration: none;
  color: var(--black);
}

input {
  font-size: 1rem;
  border: 2px solid var(--primary);

  &:focus {
    outline: none;
    border: 2px solid var(--brown);
  }
}
</style>
