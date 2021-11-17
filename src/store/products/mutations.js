import { SET_PRODUCTS } from "./mutation-types";
import { UPDATE_QUANTITY } from "./mutation-types";

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
};
