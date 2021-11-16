import { SET_PRODUCTS } from "./mutation-types";

export default {
  /**
   *
   * @param { ProductsState } state
   * @param { [] } products
   */
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },
};
