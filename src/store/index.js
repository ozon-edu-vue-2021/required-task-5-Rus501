import Vue from "vue";
import Vuex from "vuex";

import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
  },
});

/*
async getData({ commit }) {
      try {
        const request = await fetch(
          "https://random-data-api.com/api/food/random_food?size=30"
        );
        const data = await request.json();

        commit("setProducts", data);
      } catch (error) {
        console.error(error);
      }
    },
 */
