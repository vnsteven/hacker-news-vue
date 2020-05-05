import Vue from 'vue';
import App from './App.vue';

Vue.use(require('vue-moment'));

new Vue({
  el: '#root',
  render: h => h(App)
});
