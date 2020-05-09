import Vue from 'vue';
import VueRouter from 'vue-router';
import ListContainer from 'containers/ListContainer';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/top', component: ListContainer },
    { path: '/new', component: ListContainer },
    { path: '/best', component: ListContainer },
    { path: '/', redirect: '/top' }
  ]
});
