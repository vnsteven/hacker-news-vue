<template>
  <div class="header">
    <div class="navigation">
      <router-link to="/top">
        Top
      </router-link>
      <router-link to="/new">
        New
      </router-link>
      <router-link to="/best">
        Best
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  height: 3.5rem;
  top: 0;
  background-color: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation {
  width: 45rem;

  a {
    font-size: 1.2rem;
    color: var(--white);
    margin-right: 1rem;
  }
}
</style>
