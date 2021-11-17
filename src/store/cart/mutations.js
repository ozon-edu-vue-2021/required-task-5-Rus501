import { ADD_TO_CART, REMOVE_FROM_CART } from "./mutation-types";

export default {
  /**
   *
   * @param { ProductsState } state
   * @param { } product
   */
  [ADD_TO_CART](state, product) {
    state.cart.push(product);
  },

  [REMOVE_FROM_CART](state, productToRemove) {
    state.cart = state.cart.filter((item) => item.uid !== productToRemove.uid);
  },
};
