import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  actions,
  state,
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
