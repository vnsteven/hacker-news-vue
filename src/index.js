import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(require('vue-moment'));

new Vue({
  router,
  el: '#root',
  render: h => h(App)
});
