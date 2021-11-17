import { REMOVE_FROM_CART } from "./mutation-types";

/**
 *
 * @param { function } commit
 * @param {} productToRemove
 */
export function removeFromCart({ commit }, productToRemove) {
  commit(REMOVE_FROM_CART, productToRemove);
}
