import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postData: "",
    address: ""
  },
  mutations: {
    getAddress(state, postData, address) {
      state.postData = postData;
      state.address = address;
      
    }
  },
  actions: {
    async getAddressAction(context) {
      let url = await axios.get("https://apis.postcode-jp.com/api/v3/postcodes/" + this.zipcode + "?apiKey=PJDyOjziRdDC2TwwVUhYrGdm6o88j2VewRIxLZo" + this.apiKey)
        .then(response => {
          url.adress = response.data.fullAddress;
        });
      context.commit("getAddress", url);
    }
  }
});