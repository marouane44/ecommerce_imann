import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3594b23e = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _53f9f8c5 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _623f023d = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _126b4960 = () => interopDefault(import('..\\pages\\categories\\_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _73a07995 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _f169833e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3594b23e,
    name: "cart"
  }, {
    path: "/categories",
    component: _53f9f8c5,
    name: "categories"
  }, {
    path: "/products",
    component: _623f023d,
    name: "products"
  }, {
    path: "/categories/:category",
    component: _126b4960,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _73a07995,
    name: "products-product"
  }, {
    path: "/",
    component: _f169833e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
