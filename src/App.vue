<template>
  <div id="app">
    <input type="text" v-model="postData" />
    <button @click="getAddress">住所自動表示</button>
    <p>Address:{{$store.state.address}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: "",
    };
  },
  methods: {
    getAddress() {
      this.$store.dispatch("getAddressAction", this.postData);
    },
  },
};
</script>