import { SET_DATA } from "./mutation-types";

async function setData({ commit }) {
  try {
    const request = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    const data = await request.json();

    commit(SET_DATA, data);
  } catch (error) {
    console.error(error);
  }
}

export default setData;
