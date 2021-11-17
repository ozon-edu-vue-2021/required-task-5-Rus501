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
        <button @click="$emit('add-to-fav')">В избранное</button>
        <button @click="$emit('remove')">Удалить</button>
      </div>
    </div>
    <span>
      <b>{{ price }} &#x20bd;</b>
      <div class="flexbox">
        <label for="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          :value="quantity"
          min="1"
          max="999"
          @input="$emit('quantity-change', $event.target.value)"
        />
        x
      </div>
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
    quantity: {
      type: Number,
      default: 1,
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
  position: relative;
  min-width: 50px;
  text-align: right;
}

.flexbox {
  position: absolute;
  top: -2px;
  left: -110px;
  font-size: 14px;
}

.flexbox input {
  max-width: 50px;
  padding: 0;
  outline: none;
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
