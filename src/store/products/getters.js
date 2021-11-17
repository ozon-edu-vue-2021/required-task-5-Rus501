/**
 *
 *
 * @param { ProductsState } state
 * @return { [] }
 */
export function getterProducts(state) {
  return state.products;
}

export function getterFavProducts(state) {
  return state.products.filter((item) => item.favourite === true);
}
