import {
  SET_PRODUCTS,
  UPDATE_QUANTITY,
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
} from "./mutation-types";

export default {
  /**
   *
   * @param { ProductsState } state
   * @param { [] } products
   */
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },

  [UPDATE_QUANTITY](state, { product, quantity }) {
    state.products.find((item) => item.uid === product.uid).quantity =
      Number(quantity);
  },

  [ADD_TO_FAV](state, product) {
    state.products.find((item) => item.uid === product.uid).favourite = true;
  },

  [REMOVE_FROM_FAV](state, product) {
    state.products.find((item) => item.uid === product.uid).favourite = false;
  },
};
