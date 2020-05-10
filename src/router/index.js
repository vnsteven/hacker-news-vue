import Vue from 'vue';
import VueRouter from 'vue-router';
import Stories from 'containers/Stories';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/top', component: Stories },
    { path: '/new', component: Stories },
    { path: '/best', component: Stories },
    { path: '/', redirect: '/top' }
  ]
});
