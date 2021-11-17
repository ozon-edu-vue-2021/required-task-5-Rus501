import { SET_PRODUCTS } from "./mutation-types";
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
    });

    commit(SET_PRODUCTS, data);
  } catch (error) {
    console.error(error);
  }
}
