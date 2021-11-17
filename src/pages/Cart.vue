<template>
  <div>
    <div class="cart-header">Your Cart</div>
    <section>
      <div>
        <CartProduct
          v-for="product in cart"
          :key="product.uid"
          :name="product.dish"
          :description="product.description"
          :image-id="product.imageId"
          :price="product.price"
          :quantity="product.quantity"
          @remove="removeFromCart(product)"
          @quantity-change="updateQuantity({ product, quantity: $event })"
        />
      </div>
      <div class="cart-order">
        Ваш заказ:
        <br />
        <br />
        Общая стоимость <b>{{ cartPrice }} &#x20bd;</b>
        <button @click="showCart">Оформить заказ</button>
      </div>
    </section>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CartProduct,
  },
  computed: {
    ...mapGetters("cart", {
      cart: "getterCart",
      cartPrice: "getterPrice",
    }),
  },
  methods: {
    showCart() {
      alert(JSON.stringify(this.cart));
    },
    ...mapActions("cart", {
      removeFromCart: "removeFromCart",
      updateQuantity: "updateQuantity",
    }),
  },
};
</script>

<style scoped>
.cart-header {
  text-align: center;
  margin-bottom: 40px;
}

section {
  max-width: 1000px;
  display: flex;
  gap: 50px;
  margin: auto;
}

.cart-order {
  min-width: 190px;
}

button {
  padding: 7px 15px;
  margin-top: 30px;
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
