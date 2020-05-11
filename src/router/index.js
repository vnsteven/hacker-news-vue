import Vue from 'vue';
import VueRouter from 'vue-router';
import Stories from 'views/StoriesView';
import Comments from 'views/CommentsView';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/top', component: Stories },
    { path: '/new', component: Stories },
    { path: '/best', component: Stories },
    { path: '/item/:id', component: Comments },
    { path: '/', redirect: '/top' }
  ]
});
