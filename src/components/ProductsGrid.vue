<template>
  <section>
    <ProductItem
      v-for="item in products"
      :key="item.uid"
      :name="item.dish"
      :description="item.description"
    />
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

import { mapGetters, mapActions } from "vuex";

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
      loadProducts: "actionGetProducts",
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
