<template>
  <div class="cart-product">
    <img :src="getImage(imageId)" alt="" />
    <div class="cart-product__description">
      <p>
        <b>{{ name }}</b>
      </p>
      <p>
        {{ description }}
      </p>
      <div class="cart-product__description-btn">
        <button>В избранное</button>
        <button @click="$emit('remove')">Удалить</button>
      </div>
    </div>
    <span>
      <b>{{ price }} &#x20bd;</b>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "placeholder",
    },
    description: {
      type: String,
      default: "placeholder description",
    },
    imageId: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getImage() {
      return (randomNum) => require(`../assets/images/${randomNum}.webp`);
    },
  },
};
</script>

<style scoped>
.cart-product {
  display: grid;
  grid-template-columns: 150px 1fr 50px;
  column-gap: 20px;
  margin-bottom: 35px;
}

img {
  max-height: 150px;
}

p {
  line-height: 1.4;
}

span {
  min-width: 50px;
  text-align: right;
}

.cart-product__description-btn {
  display: flex;
  gap: 10px;
}

button {
  background: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
  color: hsl(220, 97%, 34%);
}

button:hover {
  text-decoration: underline;
}
</style>
