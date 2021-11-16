import { SET_PRODUCTS } from "./mutation-types";

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

    commit(SET_PRODUCTS, data);
  } catch (error) {
    console.error(error);
  }
}
