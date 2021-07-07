import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Liked from './views/Liked.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/liked',
    component: Liked,
  },
];

const config = {
  history: createWebHistory(),
  routes,
};

const Router = createRouter(config);

export default Router;
