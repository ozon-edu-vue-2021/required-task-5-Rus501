<template>
  <section>
    <ProductItem />
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ProductItem,
  },
  methods: {
    ...mapActions('products', {
      loadProducts: 'getProducts'
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
}
</style>
