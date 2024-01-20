import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductPage from '../pages/product';
import ProductDetail from "@/pages/product/ProductDetail";

const routes = [
  {
    path: '/',
    name: '',
    component: ProductPage,
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/404',
    name: 'NotFound',
    component: ProductPage,
  },
  { path: '/', redirect: '/' },
  { path: '*', redirect: '/404' },
];

const index = new VueRouter({
  mode: 'history',
  routes,
});

export default index;