<template>
  <div class="product">
    <img :src="getImage(randomNum)" alt="" />
    <p style="min-height: 35px">
      <b>{{ name }}</b>
    </p>
    <p>
      {{ description }}
    </p>
    <div class="flexbox">
      <button>В корзину</button>
      <span>
        <b>{{ randomPrice }} &#x20bd;</b>
      </span>
    </div>
  </div>
</template>

<script>
import getRandomNumber from "../utils/randomizer";

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
  },
  computed: {
    getImage() {
      return (num) => require(`../assets/images/${num}.webp`);
    },
    randomNum() {
      return getRandomNumber(0, 11);
    },
    randomPrice() {
      return getRandomNumber(50, 200);
    },
  },
};
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

.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  font-size: 12px;
  padding: 7px 15px;
  border: none;
  border-radius: 7px;
  background: hsl(220, 97%, 34%);
  color: #fff;
  cursor: pointer;
  transition: background-color 200ms;
}

button:hover {
  background: hsl(220, 97%, 60%);
}
</style>
