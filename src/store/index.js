import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: "",
  },
  mutations: {
    getAddress(state, url) {
      state.address = url.data.allAddress;
    },
  },
  actions: {
    async getAddressAction(context, postData) {
      let data = await axios.get(
        "https://apis.postcode-jp.com/api/v3/postcodes/" + postData + "?apiKey=PJDyOjziRdDC2TwwVUhYrGdm6o88j2VewRIxLZo");
      context.commit("getAddress", data);
    },
  },
});