<template>
  <section>
    <ProductItem
      v-for="product in favProducts"
      :key="product.uid"
      :name="product.dish"
      :description="product.description"
      :image-id="product.imageId"
      :price="product.price"
      :favourite="product.favourite"
      @add-to-cart="addProductToCart(product)"
      @add-to-fav="addToFav(product)"
      @remove-from-fav="removeFromFav(product)"
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
      favProducts: "getterFavProducts",
    }),
  },
  methods: {
    ...mapActions("products", {
      updateQuantity: "updateQuantity",
      addToFav: "addToFav",
      removeFromFav: "removeFromFav",
    }),
    ...mapMutations("cart", {
      addProductToCart: "addToCart",
    }),
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
