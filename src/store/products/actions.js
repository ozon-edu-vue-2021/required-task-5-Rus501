import {
  SET_PRODUCTS,
  UPDATE_QUANTITY,
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
} from "./mutation-types";

import getRandomNumber from "@/utils/randomizer";

/**
 *
 * @param { function } commit
 * @param { [] } products
 */
export async function getProducts({ commit }) {
  try {
    const request = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    const data = await request.json();

    data.forEach((product) => {
      product.price = getRandomNumber(50, 200);
      product.imageId = getRandomNumber(0, 11);
      product.quantity = 1;
      product.favourite = false;
    });

    commit(SET_PRODUCTS, data);
  } catch (error) {
    console.error(error);
  }
}

export function updateQuantity({ commit }, payload) {
  commit(UPDATE_QUANTITY, payload);
}

export function addToFav({ commit }, product) {
  commit(ADD_TO_FAV, product);
}

export function removeFromFav({ commit }, product) {
  commit(REMOVE_FROM_FAV, product);
}
