<template>
  <div class="product">
    <img :src="getImage(imageId)" alt="" />
    <p style="min-height: 35px">
      <b>{{ name }}</b>
    </p>
    <p>
      {{ description }}
    </p>
    <div class="flexbox">
      <button @click="$emit('clicked')">В корзину</button>
      <span>
        <b>{{ price }} &#x20bd;</b>
      </span>
    </div>
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

button:active {
  background: hsl(220, 97%, 70%);
}
</style>
