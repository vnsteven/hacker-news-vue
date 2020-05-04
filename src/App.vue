<template>
  <div class="app">
    <Header />
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
  --grey: #F2F3F5;
}

body {
  font-family: 'Lato';
  font-size: 15px;
  background-color: var(--grey);
  height: 100vh;
  width: 100vw;
}

.app {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
