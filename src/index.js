import Vue from 'vue';
import App from './containers/App';
import router from './router';

Vue.use(require('vue-moment'));

new Vue({
  router,
  el: '#root',
  render: h => h(App)
});
