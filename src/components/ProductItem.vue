<template>
  <div class="product">
    <img src="@/assets/images/0.webp" alt="" />
    <p>
      Pasta and Beans
      <br />
      28-day aged 300g USDA Certified Prime Ribeye, rosemary-thyme garlic
      butter, with choice of two sides.
    </p>
    <button>В корзину</button>
    <span>99 Р</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product {
  max-width: 150px;
}

img {
  max-height: 150px;
}

p {
  display: -webkit-box;
  max-height: 56px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.4;
}
</style>
