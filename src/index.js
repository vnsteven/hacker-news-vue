import Vue from 'vue';
import App from './views/App.vue';
import router from './router';

Vue.use(require('vue-moment'));

export default new Vue({
  router,
  el: '#root',
  render: (h) => h(App)
});
