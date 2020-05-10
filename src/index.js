import Vue from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store';

Vue.use(require('vue-moment'));

export default new Vue({
  router,
  store,
  el: '#root',
  render: (h) => h(App)
});
