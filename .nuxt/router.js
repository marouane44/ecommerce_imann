import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ef5fea1 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _cfd38df6 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _4d3d9ee1 = () => interopDefault(import('..\\pages\\index2.vue' /* webpackChunkName: "pages/index2" */))
const _d6235b06 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _564c7b90 = () => interopDefault(import('..\\pages\\categories\\_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _99e77d56 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _6595dea1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _3ef5fea1,
    name: "cart"
  }, {
    path: "/categories",
    component: _cfd38df6,
    name: "categories"
  }, {
    path: "/index2",
    component: _4d3d9ee1,
    name: "index2"
  }, {
    path: "/products",
    component: _d6235b06,
    name: "products"
  }, {
    path: "/categories/:category",
    component: _564c7b90,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _99e77d56,
    name: "products-product"
  }, {
    path: "/",
    component: _6595dea1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
