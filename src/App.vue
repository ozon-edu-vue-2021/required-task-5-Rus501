<template>
  <div id="app">
    <ProductsGrid />
  </div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid.vue";
import "normalize.css";

export default {
  name: "App",
  components: {
    ProductsGrid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
