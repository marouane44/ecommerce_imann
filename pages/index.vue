<template>
<div>
  <h1>
    Hello
  </h1>
  <common-products-list-page :load-products="loadProducts" /></div>
</template>

<script>
import CommonProductsListPage from '~/components/products-list/CommonProductsListPage'
import Product from '~/api/product'

export default {
  components: { CommonProductsListPage },
  methods: {
    async loadProducts () {
      return await Product.list()
    }
  }
}
</script>
