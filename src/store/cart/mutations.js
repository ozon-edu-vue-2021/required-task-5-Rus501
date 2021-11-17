import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "./mutation-types";

export default {
  /**
   *
   * @param { ProductsState } state
   * @param { } product
   */
  [ADD_TO_CART](state, product) {
    if (state.cart.find((item) => item.uid === product.uid)) {
      product.quantity += 1;
      return;
    }
    state.cart.push(product);
  },

  [REMOVE_FROM_CART](state, productToRemove) {
    state.cart = state.cart.filter((item) => item.uid !== productToRemove.uid);
  },

  [UPDATE_QUANTITY](state, { product, quantity }) {
    state.cart.find((item) => item.uid === product.uid).quantity =
      Number(quantity);
  },
};
