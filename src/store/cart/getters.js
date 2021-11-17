/**
 *
 *
 * @param { CartState } state
 * @return { [] }
 */
export function getterCart(state) {
  return state.cart;
}

export function getterPrice(state) {
  return state.cart.reduce((acc, curr) => acc + curr.price, 0);
}
