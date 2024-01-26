<template>
  <button @click="setToken">Find random Doggie</button>
</template>

<script>
import { getNftsLength } from "../../../utils/web3";
let totalNFTS = Number(await getNftsLength());

const getRandomTokenId = () => {
  return (1 + Math.floor(Math.random() * (totalNFTS - 1 + 1))).toString();
};

export default {
  methods: {
    setToken() {
      let randomTokenId = getRandomTokenId();
      this.$emit("set-token-id", randomTokenId);
    },
  },
};
</script>
