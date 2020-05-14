import Vue from 'vue';
import VueRouter from 'vue-router';

const Stories = () => import('views/StoriesView');
const Comments = () => import('views/CommentsView');
const User = () => import('views/UserView');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/top', component: Stories },
    { path: '/new', component: Stories },
    { path: '/best', component: Stories },
    { path: '/item/:id', component: Comments },
    { path: '/user/:id', component: User },
    { path: '/', redirect: '/top' }
  ]
});
