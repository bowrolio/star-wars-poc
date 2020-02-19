import Vue from 'vue';
import VueRouter from 'vue-router';
import People from '../views/people';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'People',
    component: People,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
