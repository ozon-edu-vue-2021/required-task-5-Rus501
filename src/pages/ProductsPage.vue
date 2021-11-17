<template>
  <section>
    <ProductItem
      v-for="product in products"
      :key="product.uid"
      :name="product.dish"
      :description="product.description"
      :image-id="product.imageId"
      :price="product.price"
      @clicked="addProductToCart(product)"
      @quantity-change="updateQuantity({ product, quantity: $event })"
    />
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters("products", {
      products: "getterProducts",
    }),
  },
  methods: {
    ...mapActions("products", {
      loadProducts: "getProducts",
      updateQuantity: "updateQuantity",
    }),
    ...mapMutations("cart", {
      addProductToCart: "addToCart",
    }),
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style scoped>
section {
  max-width: 1000px;
  min-width: 680px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 40px;
}
</style>
