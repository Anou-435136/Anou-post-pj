<template>
  <div id="app">
    <input type="text" v-model="postData" />
    <button @click="getAddress">住所自動表示</button>
    <p>Address:{{address}}</p>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      postData: ""
    };
  },
  computed: {
    ...mapState({
      address() {
      return this.$store.state.postData.address;
    }})
  },
  methods: {
    getAddress() {
      this.$store.commit("getAddress", this.postData);
      this.$store.dispatch("getAddressAction");
    }
  }
};
</script>

<style>

</style>
