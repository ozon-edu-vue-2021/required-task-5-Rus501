import { REMOVE_FROM_CART, UPDATE_QUANTITY } from "./mutation-types";

/**
 *
 * @param { function } commit
 * @param {} productToRemove
 */
export function removeFromCart({ commit }, productToRemove) {
  commit(REMOVE_FROM_CART, productToRemove);
}

export function updateQuantity({ commit }, payload) {
  commit(UPDATE_QUANTITY, payload);
}
