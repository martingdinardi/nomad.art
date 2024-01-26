<template>
  <Suspense>
    <header class="header">
      <SearchDoggySection :tokenId="tokenId" @update-token-id="updateTokenId" />
      <SelectedDoggySection :selectedCard="selectedCard" :loading="loading" />
    </header>
  </Suspense>
</template>

<style lang="scss">
@import "../../styles/components/Header.scss";
</style>

<script setup>
import { ref, onMounted } from "vue";
import SearchDoggySection from "./SearchDoggySection/index.vue";
import SelectedDoggySection from "./SelectedDoggySection/index.vue";
import { getCardData, getNftsLength } from "../../utils/web3";

let loading = ref(true);
let selectedCard = ref(null);
let totalNFTS = ref(0);
let tokenId = "";

const updateTokenId = (newTokenId) => {
  if (newTokenId <= totalNFTS) {
    tokenId = newTokenId;
    fetchData();
  } else {
    alert(`Invalid tokenId: ${newTokenId}`);
  }
};

const fetchData = async () => {
  loading.value = true;
  selectedCard.value = await getCardData(tokenId);
  loading.value = false;
};

onMounted(async () => {
  totalNFTS = Number(await getNftsLength());
  tokenId = (1 + Math.floor(Math.random() * (totalNFTS - 1 + 1))).toString();
  fetchData();
});
</script>
